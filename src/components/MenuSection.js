import { useState, useContext } from "react";
import { Context } from "../Context";
import Input from "./Input";
import { keys, translate } from "../helpers/appTranslations";
import { getImagesData } from "../helpers/getData";
import { useAiActions } from "../actions/useAiActions";
import placeholder from "../assets/images/placeholder.png";
import toast from "react-hot-toast";
import { StorageAPI } from "../helpers/storage";
import { DEFAULT_MENU_ID, SAVED_MENU_ID } from "./Generate";
import { requestImageSearch } from "../actions/tools";
import styles from "./MenuSectionForWeb.module.scss";

export const MenuSection = ({ item, index, sectionName, hasOrderInput }) => {
  const { setMenuData } = useContext(Context);
  const hasOrder = hasOrderInput === "true";
  const [currentDetail, setCurrentDetail] = useState("ingredients");
  const generateText = "✨Generate image";
  const isMobile = () => {
    const regex =
      /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
    return regex.test(navigator.userAgent);
  };
  const [buttonContext, setButtonContext] = useState(
    isMobile() && !item.imageSource ? generateText : ""
  );
  const { generateMenuImage } = useAiActions();
  const [disablePhotoButton, setDisablePhotoButton] = useState(
    item?.imageSource ? true : false
  );

  const isDetailActive = (val) => {
    return currentDetail === val
      ? { borderBottomColor: "var(--secondary)" }
      : {};
  };

  // Make a single google image search request
  const onGoogleImageRequest = async () => {
    const imgUrl = await requestImageSearch({
      id: item.id,
      name: item.name,
      description: item.description,
      category: item.category,
    });
    // Check error
    if (!imgUrl) throw new Error("No image(s) returned.");
    // Return img source string
    return imgUrl;
  };

  // Make a single Ai image generation request
  const onGenImageRequest = async () => {
    let data = "";
    const res = await generateMenuImage({
      name: item.name,
      description: item.description,
      ingredients: item.ingredients,
      category: item.category,
    });
    data = res?.imageSource;
    // Check error msg
    if (res?.error) return res;
    // Return img source string
    return data;
  };

  const onAction = async () => {
    let data = "";
    setDisablePhotoButton(true);
    try {
      if (!item.imageSource) {
        // Do Ai gen on dev env only (change as needed)
        if (window.location.origin.includes("xxx"))
          data = await onGenImageRequest();
        // Do image search on prod only (change as needed)
        else data = await onGoogleImageRequest();
        // Check response ok
        if (data?.error) return data;
        // Save source to localStorage
        const menu = StorageAPI.getItem(SAVED_MENU_ID);
        const primary = menu?.find((i) => i.id === DEFAULT_MENU_ID);
        const items = primary?.items;
        const newItem = items.find((i) => i.id === item.id);
        if (!data && typeof data !== "string")
          throw new Error("Could not save image. No data returned to persist.");
        if (!newItem || !menu)
          throw new Error("Could not save image. Something went wrong.");
        // Save new menu data to disk
        newItem.imageSource = data;
        StorageAPI.setItem(SAVED_MENU_ID, menu);
        // Update menu data
        setMenuData(primary);
      }
      return data;
    } catch (err) {
      return `${err}`;
    }
  };

  const getCurrencyChar = (type) => {
    switch (type) {
      case "ESP":
      case "EUR":
        return "€";
      case "YEN":
      case "JPY":
        return "￥";
      case "KRW":
        return "₩";
      case "RUB":
        return "₽";
      case "RMB":
        return "¥";
      case "USD":
        return "$";
      default:
        return "$";
    }
  };

  const LoadingComponent = () => {
    return (
      <div className={styles.loadingToast}>
        {/* Header */}
        <b>Generating image...this may take some time. Do not exit page.</b>
        {/* Details */}
        <p>
          Name: {item.name}
          {"\n"}
          Description:{"\n"}
          {item.imageDescription || "No description"}
        </p>
      </div>
    );
  };

  return (
    <article className={styles.articleContainer} key={item.id}>
      <div className={styles.mainContainer}>
        {/* Main Details */}
        <div className={styles.textContainer}>
          {/* Name */}
          <h3 className={styles.name}>{item.name}</h3>
          {/* Price */}
          <strong className={styles.price}>
            {getCurrencyChar(item.currency)}
            {item.price}
          </strong>
          {/* Description */}
          <p className={styles.description}>{item.description}</p>
          {/* Buy/Remove order buttons */}
          {hasOrder && (
            <Input type={sectionName} name={item.name} index={index} />
          )}
        </div>
        {/* Photo */}
        <div className={styles.imageContainer}>
          <button
            className={styles.imageButton}
            disabled={disablePhotoButton}
            onClick={async () =>
              toast.promise(onAction(), {
                style: {
                  minWidth: "6rem",
                },
                position: "top-center",
                loading: <LoadingComponent />,
                success: (data) => {
                  // Prevents success event when canceling promise
                  if (data?.error) throw new Error(data.message);
                  if (!data) throw new Error("No data was returned.");
                  return <b>Image saved!</b>;
                },
                error: (err) => {
                  setDisablePhotoButton(false);
                  return (
                    <div>
                      <b>Failed to generate image 😭</b>
                      <p>{err?.message}</p>
                    </div>
                  );
                },
              })
            }
            onFocus={() => {}}
            onMouseOut={() => setButtonContext("")}
            onBlur={() => {}}
            onMouseOver={() => {
              if (!item.imageSource) setButtonContext(generateText);
              else if (!isMobile()) setButtonContext("");
            }}
          >
            {buttonContext && (
              <div className={styles.genIcon}>{buttonContext}</div>
            )}
            <img
              title={item.imageDescription}
              className={styles.photo}
              src={getImagesData(item.id)?.imageSource || placeholder}
              alt={`${item.category} - ${item.name}`}
            ></img>
          </button>
        </div>
      </div>
      {/* Extra Details */}
      <div className={styles.detailsContainer}>
        <span style={{ width: "100%" }}>
          {/* Detail Name */}
          <div className={styles.detailNamesContainer}>
            <button
              style={isDetailActive("category")}
              className={styles.detailButton}
              onClick={() => setCurrentDetail("category")}
            >
              <h3 className={styles.name}>{translate(keys.CATEGORY)}</h3>
            </button>
            <button
              style={isDetailActive("ingredients")}
              className={styles.detailButton}
              onClick={() => setCurrentDetail("ingredients")}
            >
              <h3 className={styles.name}>{translate(keys.INGREDIENTS)}</h3>
            </button>
            <button
              style={isDetailActive("health")}
              className={styles.detailButton}
              onClick={() => setCurrentDetail("health")}
            >
              <h3 className={styles.name}>{translate(keys.HEALTH)}</h3>
            </button>
            <button
              style={isDetailActive("allergy")}
              className={styles.detailButton}
              onClick={() => setCurrentDetail("allergy")}
            >
              <h3 className={styles.name}>{translate(keys.ALLERGY)}</h3>
            </button>
          </div>
          {/* Selected detail description */}
          <p
            style={{
              alignItems: "center",
              marginTop: "1rem",
            }}
            className={styles.description}
          >
            {item[currentDetail] || "No info 😐"}
          </p>
        </span>
      </div>
    </article>
  );
};

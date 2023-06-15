import MenuSection from "./MenuSection";
import Total from "./Total";
import Banner from "./Banner";
import Footer from "./Footer";
import styles from "./MenuPage.module.scss";

const MenuPageForPrint = ({ data }) => {
    const queryParameters = new URLSearchParams(window.location.search);
    const isOrderMenuVariant = queryParameters.get("order"); // Whether this should track orders

    const renderMenuItems = (items) => {
        if (!items) return;
        const sections = Object.entries(items)?.map(([key, val]) => {
          return <MenuSection key={key} items={val} sectionName={key} hasOrderInput={isOrderMenuVariant} />;
        });
        return <>{sections}</>;
    };

    return (
      <div className={styles.page}>
        <Banner title={data?.companyName} />
        {renderMenuItems(data?.menu)}
        <Footer data={data} />
        <Total hasOrderInput={isOrderMenuVariant} />
      </div>
    );
}

export default MenuPageForPrint;
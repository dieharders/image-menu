import React, { useState, useRef } from "react";

export const Context = React.createContext();

export const Provider = (props) => {
  const queryParameters = new URLSearchParams(window.location.search);
  // State vals
  const availableLanguages = useRef([]);
  const [storedImages, setStoredImages] = useState([]); // track what images are persisted on disk
  const [items, setItems] = useState({}); // purchase items
  const [menuId, setMenuId] = useState(queryParameters.get("id"));
  const geminiAPIKeyRef = useRef("");
  const openaiAPIKeyRef = useRef("");
  const [fileInputValue, setFileInputValue] = useState([]);
  const loadingText = useRef(null);
  const [menuData, setMenuData] = useState({});

  const updateItem = (type, index, count) => {
    const key = `${type.toLowerCase()}-${index}`;
    const value = Number.isNaN(Number(count)) ? 0 : Number(count);
    const amount = Math.max(0, value);

    setItems({ ...items, [key]: Number(amount) });
  };

  return (
    <Context.Provider
      value={{
        purchases: [items, updateItem],
        geminiAPIKeyRef,
        openaiAPIKeyRef,
        fileInputValue,
        setFileInputValue,
        loadingText,
        menuId,
        setMenuId,
        menuData,
        setMenuData,
        storedImages,
        setStoredImages,
        availableLanguages,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

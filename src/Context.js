import React, { useState } from "react";

export const Context = React.createContext();

export const Provider = props => {
  const [items, setItems] = useState({});

  const updateItem = (type, index, count) => {
    const key = `${type.toLowerCase()}-${index}`;
    const value = Number.isNaN(Number(count)) ? 0 : Number(count);
    const amount = Math.max(0, value);

    setItems({ ...items, [key]: Number(amount) });
  };

  return (
    <Context.Provider value={[items, updateItem]}>
      {props.children}
    </Context.Provider>
  );
};

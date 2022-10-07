import React, { createContext, useState } from "react";

export const CountContext = createContext();

const CountContextProvider = (props) => {
  const [count, setCount] = useState(0);
  const addCount = () => {
    setCount(count + 1);
  }

  return (
    <CountContext.Provider value={{ count, addCount }}>
      {props.children}
    </CountContext.Provider>
  )
}

export default CountContextProvider;
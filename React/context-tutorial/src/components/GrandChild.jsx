import React, { useContext } from "react";
import { CountContext } from "../provider/CountProvider";

const GrandChild = () => {
  const { count, addCount } = useContext(CountContext);
  return (
    <div>
      <p> GrandChild : {count}</p>
      <button onClick={addCount}>+</button>
    </div>
  );
};

export default GrandChild;

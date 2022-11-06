import React, { useState } from "react";

const Counter = () => {
  let [count, setCount] = useState(0);
  
  const handAdd = () => {
    count++;
    console.log(count);
  }

  return (
    <>
      <div>Counter</div>
      <h1>{count}</h1>
      <button onClick={handAdd}>Click</button>
    </>
  );
};

export default Counter;

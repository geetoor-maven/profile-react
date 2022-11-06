import React, { useEffect, useState } from "react";

const CounterPro = (props) => {
  let [count, setCount] = useState(props.initialValue);

  const handAdd = () => {
    setCount(count + 1)
  };

  const minAdd = () => {
    setCount(count - 1)
  };

  useEffect(() => {
    console.log(count);
  }, [count]);

  return (
    <>
      <div>Counter Pro</div>
      <h1>{count}</h1>
      <button onClick={handAdd}>Tambah</button>
      <button onClick={minAdd}>Kurang</button>
    </>
  );
};

export default CounterPro;

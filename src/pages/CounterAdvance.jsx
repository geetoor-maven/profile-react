import React, { useState } from "react";
import PropTypes from 'prop-types';

const CounterAdvance = ({initialValue}) => {
  let [count, setCount] = useState(initialValue);

  const handAdd = () => {
    setCount(count+1)
  };

  return (
    <>
      <div>Counter Advance</div>
      <h1>{count}</h1>
      <button onClick={handAdd}>Click</button>
    </>
  );
};

CounterAdvance.propTypes = {
  initialValue: PropTypes.number
};

export default CounterAdvance;

import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { counterSelector, increment, decrement } from "./redux";

const Counter: React.FC = () => {
  const count = useSelector(counterSelector);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
      <br />
      <div>
        <p>{count.value}</p>
      </div>
    </div>
  );
};

export default Counter;

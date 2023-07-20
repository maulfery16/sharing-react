import { Fragment, useState } from "react";
import Numbers from "../components/Numbers";
import NumbersFixed from "../components/NumbersFixed";

const CounterComponent = () => {
  const [count, setCount] = useState(0);
  const increaseCounter = () => {
    setCount((curr) => curr + 1);
  };

  const decreaseCounter = () => {
    setCount((curr) => curr > 0 ? (curr - 1) : 0);
  };

  return (
    <Fragment>
      <div>
        Count: {count} &nbsp;
        <button onClick={decreaseCounter} style={{ marginRight: 8 }}>-</button>
        <button onClick={increaseCounter}>+</button>
      </div>
      <hr />
    </Fragment>
  )
}

const LocalState = () => {
  const [nums, setNums] = useState([]);
  const [count, setCount] = useState(0);

  const increaseCounter = () => {
    setCount((current) => current + 1);
  };

  const decreaseCounter = () => {
    setCount((current) => current > 0 ? (current - 1) : 0);
  }

  const addRandom = () => {
    let randNum = parseInt(Math.random() * 1000, 10);
    setNums(current => [...current, randNum]);
  };

  return (
    <Fragment>
      <CounterComponent />
      <NumbersFixed />
    </Fragment>
  );
}

export default LocalState;
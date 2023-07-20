import { useState, useMemo, useEffect, Fragment } from "react";

const calculateMagicNumber = (n) => {
  console.log("Costly calculation triggered.");
  let num = 1;
  for (let i = 0; i < n + 1000000000; i++) {
    num += 123000;
  }
  return parseInt(num - num * 0.22, 10);
}

const UseMemo = () => {
  const [nums, setNums] = useState([]);
  const [count, setCount] = useState(1);
  const increaseCounter = () => {
    setCount(current => current + 1);
  };
  const addRandom = () => {
    let randNum = parseInt(Math.random() * 1000, 10);
    setNums(current => [...current, randNum]);
  };

  // const magicNum = calculateMagicNumber(count);
  const magicNum = useMemo(() => calculateMagicNumber(count), [count]);

  return (
    <Fragment>
      <h1>React.useMemo</h1>
      <div>
        Counter: {count} | Magic number: {magicNum} &nbsp;
        <button onClick={increaseCounter}>+</button>
      </div>
      <hr />
      <div>
        <ul>
          {nums.map((num, i) => (
            <li key={i}>{num}</li>
          ))}
        </ul>
        <button onClick={addRandom}>Add random</button>
      </div>
    </Fragment>
  );
};

export default UseMemo;

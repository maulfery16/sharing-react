import { useState } from "react";

const NumbersFixed = () => {
  const [nums, setNums] = useState([]);

  const addRandom = () => {
    let randNum = parseInt(Math.random() * 1000, 10);
    setNums((current) => [...current, randNum]);
  };

  return (
    <div>
      <div>Numbers Component</div>
      <ul>
        {nums.map((num, i) => (
          <li key={i}>{num}</li>
        ))}
      </ul>
      <button onClick={addRandom}>Add random</button>
    </div>
  );
};

export default NumbersFixed;
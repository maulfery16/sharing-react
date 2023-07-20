import {memo} from "react";

const Numbers = ({ nums, addRandom }) => {
  console.log("Numbers rendered");
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

// export default Numbers;
export default memo(Numbers);
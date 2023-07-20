import { Fragment, memo, useState } from "react";

const ChildComponent = memo(({ count }) => {
  console.log("child component is rendering");
  return (
    <div>
      <h2>This is a child component.</h2>
      <h4>Count: {count}</h4>
    </div>
  )
});

const ReactMemo = () => {
  const [input, setInput] = useState("");
  const [count, setCount] = useState(0);

  return (
    <Fragment>
      <h1 className="title">React.memo</h1>
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={() => setCount(current => current + 1)}>Increment counter</button>
        <h3>Input text: {input}</h3>
        <h3>Count: {count}</h3>
        <hr />
        <ChildComponent count={count} />
      </div>
    </Fragment>
  )
}

export default ReactMemo;
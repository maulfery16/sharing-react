import { useState, useCallback } from "react";
import { shuffle } from "lodash";
import Users from "../components/Users";

const UseCallback2 = () => {
  const [text, setText] = useState("");
  const [charRange, setCharRange] = useState("A-M");

  const handleText = (event) => {
    setText(event.target.value);
  };

  const fetchUsers = useCallback((number) => {
    const result = fetch(`https://api.thedogapi.com/v1/breeds/`)
        .then((response) => response.json())
        .then((json) =>
          shuffle(
            json.filter((user) => {
              return charRange === "A-M"
                ? user.name[0] < "N"
                : user.name[0] > "M";
            })
          ).splice(0, number)
        );

      return result;
  }, [charRange]);

  return (
    <>
      <h1>Welcome {text || "New User"}!</h1>
      <p>
        <label>
          Your name:{" "}
          <input type="text" value={text} onChange={handleText} />
        </label>
      </p>
      <p>Add the perfect users!</p>
      <p>
        <label>
          A-M
          <input
            type="radio"
            checked={charRange === "A-M"}
            onChange={() => setCharRange("A-M")}
          />
        </label>
        <label>
          N-Z
          <input
            type="radio"
            checked={charRange === "N-Z"}
            onChange={() => setCharRange("N-Z")}
          />
        </label>
      </p>
      <Users onFetchUsers={fetchUsers} />
    </>
  );
};

export default UseCallback2;

import { useState, useCallback, Fragment } from "react";
import { shuffle } from "lodash";
import SearchUsers from "../components/SearchUsers";
import PickOneUser from "../components/PickOneUser";

const defaultUsers = [{
  "id": 1,
  "name": "Emmanuel",
}, {
  "id": 2,
  "name": "Gabriele",
}, {
  "id": 3,
  "name": "Bentlee",
}, {
  "id": 4,
  "name": "Dawn",
}, {
  "id": 5,
  "name": "Fred",
}, {
  "id": 6,
  "name": "Nicolette",
}, {
  "id": 7,
  "name": "Dashper",
}, {
  "id": 8,
  "name": "Fawnia",
}, {
  "id": 9,
  "name": "Filbert",
}, {
  "id": 10,
  "name": "Urban",
}];

const UseCallback = () => {
  const [users, setUsers] = useState(defaultUsers);
  const searchUsers = useCallback((event) => {
    const filteredUsers = defaultUsers.filter((user) =>
      user.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setUsers(filteredUsers);
  }, []);

  const shuffleUsers = () => {
    setUsers((current) => shuffle(current));
  }

  return (
    <Fragment>
      <h1>React.useCallback</h1>
      <div style={{ display: "flex", gap: 10 }}>
        <button type="button" onClick={shuffleUsers}>Shuffle</button>
        <SearchUsers onSearch={searchUsers} />
      </div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </Fragment>
  )
}

export default UseCallback;
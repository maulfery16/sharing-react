import React, { useEffect, useState, memo } from 'react';

const Users = ({ onFetchUsers }) => {
  const [number, setNumber] = useState(1);
  const [usersList, setUsersList] = useState([]);

  // Runs the "fetchUsers" function when either the number
  // variable or the onFetchUsers variable changes.
  useEffect(
    () => {
      if (number && typeof onFetchUsers === 'function') {
        async function fetchUsers() {
          const response = await onFetchUsers(number);
          setUsersList(response);
        }
        fetchUsers();
      }
    },
    [onFetchUsers, number] // dependencies of the useEffect
  );

  return (
    <>
      <label>
        Number of users:{' '}
        <input
          max="10"
          min="1"
          value={number}
          type="number"
          onChange={(event) => setNumber(event.target.value)}
        />
      </label>
      {usersList && (
        <ul>
          {usersList.map((dog) => (
            <li key={dog.id}>{dog.name}</li>
          ))}
        </ul>
      )}
    </>
  );
};

export default memo(Users);
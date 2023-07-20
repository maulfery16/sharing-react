import {useEffect, useState, useMemo, memo}  from 'react'

const Child = memo(({ user }) => {
  useEffect(() => {
    console.log("child component re-render ", user.name);
  }, [user]);
  return (
    <div style={{ marginTop: 20 }}>Child Component</div>
  )
})

const UseMemo3 = () => {
  const [isDarkMode, setDarkMode] = useState(false);
  const users = useMemo(() => [{
    id: 1,
    name: 'abdul'
  }], [])
  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={isDarkMode}
          onChange={(e) => setDarkMode(e.target.checked)}
        />
        {isDarkMode ? "Dark Mode" : "Light Mode"}
      </label>
      <Child user={users} />
    </div>
  )
}

export default UseMemo3;
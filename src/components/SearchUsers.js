import { memo } from 'react'

const SearchUsers = ({ onSearch }) => {
  console.log("SearchUsers rendered !");
  
  return (
    <input type="text" name="search_user" onChange={onSearch} />
  )
}

// export default SearchUsers;
export default memo(SearchUsers);
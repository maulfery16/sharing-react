import { memo } from 'react'

const PickOneUser = ({getFirst}) => {
  return (
    <button onClick={getFirst}>Pick First User</button>
  )
}

export default memo(PickOneUser);
import React from 'react'

const Logout = ({ setIsLogged }) => {
  return (
    <>
      <button className='btn btn-danger' onClick={() => {
        setIsLogged(false)
      }}>log out</button>
    </>
  )
}

export default Logout

import React from 'react'
import { useAuth } from './Auth'

export const Profile = () => {
    const auth =useAuth()
    const handleLogout=()=>{
        auth.logout()
    }
  return (
    <div>
      <br></br>
      <img src={require('./user.png')} width="100px" height="100px"/>
       <h1>welcome</h1>
       <h1>{auth.user}</h1>
       <button onClick={handleLogout} className='pro-btn'>Logout</button>
    </div>
  )
}

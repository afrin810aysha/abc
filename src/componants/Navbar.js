import React from 'react'
import { NavLink} from 'react-router-dom'
import { useAuth } from './Auth'
export default function Navbar() {

  const auth=useAuth()
  return (
    <div>
      
        <nav className='navbar'>
        <br></br>
        <img src={require('./logo.png')} width='70px' height='70px' alt='logo'/>
           <NavLink to='/'>Home</NavLink>
           <NavLink to='/About'>About</NavLink>
           <NavLink to='/Contact'>Contact</NavLink>
           <NavLink to='/donate'>Donate</NavLink>
           <NavLink to='/Profile'>Profile</NavLink>
           <NavLink to='/Admin'>Payment</NavLink>
           <NavLink to='/User'>User</NavLink>
           {!auth.user && <NavLink to='/login'>Login</NavLink>}
           {!auth.user && <NavLink to='/signup'>Signup</NavLink>}
        </nav>
    </div>
  )
}

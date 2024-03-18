import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
export const Signup = () => {
    
    const[username,setUsername]=useState('')
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const handleSignup=()=>{
        axios.post('http://localhost:3001/Users',
        {"username":username,"email":email,"password":password})
        .then(res=>console.log(res))
      .catch(err=>console.log(err))
    }
  return (
    <div className='form-signin'>

        <form onSubmit={handleSignup}>
          <h1>Register</h1>
        <label>UserName: </label>
        <input type='text' value={username} onChange={(e)=>{setUsername(e.target.value)}}/>
        <br></br>
        <label>Email:  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </label>
        <input type='email' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
        <br></br>
        <label>Password: </label>
        <input type='password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
        <br></br>
        <button type='submit'>Signin</button><br></br>
        <Link to='/login'>Already have an account? Login</Link>
        </form>
    </div>
  )
}

import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Order = () => {
    const navigate=useNavigate()
  return (
    <div>
        order Confirmed
        <button onClick={()=>navigate(-1)}>back</button>
    </div>
  )
}

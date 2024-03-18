import React from 'react'
import { Link,Outlet } from 'react-router-dom'

export const Product = () => {
  return (
    <div>Product Page
        <nav className='most'>
            <Link to='mostview'>Most Viewed</Link>
            <Link to='new'>New</Link>
            <Outlet/>
        </nav>
    </div>

  )
}

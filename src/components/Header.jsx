import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <div className='bg-black p-5 space-x-5 text-white'>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/todo">Todo</NavLink>
    </div>
  )
}

export default Header

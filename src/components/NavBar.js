import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <div>
        <div>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/user-list'>Our Couples</NavLink>
            <NavLink to='/user-form'>Get Started</NavLink>
        </div>
    </div>
  )
}

export default NavBar
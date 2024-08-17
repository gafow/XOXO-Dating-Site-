import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <div>
        <div>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/About'>About</NavLink>
            <NavLink to='/UserList'>Our Couples</NavLink>
            <NavLink to='/UserForm'>Get Started</NavLink>
        </div>
    </div>
  )
}

export default NavBar
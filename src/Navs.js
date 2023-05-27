


import React from 'react'
import './Styles/Navs.css'
import {NavLink} from 'react-router-dom'

const Navs = () => {
  

  return (
    <>
    <nav id='nav' className='nav-links'>
      <ul>
        <li>
        <NavLink
            className='linkBtn'
            to="/"
            exact>
          Home
        </NavLink>
        </li>
        <li>
        <NavLink
            className='linkBtn'
            to="/aside"
            exact>
          About
        </NavLink>
        </li>
        <li>
        <NavLink
            className='linkBtn'
            to="/member"
            exact>
          Be a Member
        </NavLink>
        </li>
      </ul>
    </nav>
    
  </>

  )
}

export default Navs

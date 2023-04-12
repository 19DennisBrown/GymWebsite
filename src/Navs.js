


import React from 'react'
import './Styles/Navs.css'
import {NavLink} from 'react-router-dom'

const Navs = () => {
  return (
    <nav className='nav-links'>
      <ul>
        <li>
        <NavLink
            className='linkBtn'
            to="/"
            exact>
          Main
        </NavLink>
        </li>
        <li>
        <NavLink
            className='linkBtn'
            to="/aside"
            exact>
          Aside
        </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navs

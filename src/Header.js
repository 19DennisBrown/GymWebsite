
import React from 'react'
import './Styles/Header.css'
import {NavLink} from 'react-router-dom'


const Header = () => {
  return (
    <div className='container-header'>
      Header
      <NavLink to='Main.js'>Main</NavLink>
      <NavLink to='Aside.js'>Aside</NavLink>
    </div>
  )
}

export default Header

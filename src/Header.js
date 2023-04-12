
import React from 'react'
import './Styles/Header.css'
import {NavLink} from 'react-router-dom'
import Navs from './Navs.js'


const Header = () => {
  return (
    <div className='container-header'>
      Header
      <Navs/>
    </div>
  )
}

export default Header


import React from 'react'
import './Styles/Header.css'
import Navs from './Navs.js'
import Logo from './gymimages/community.jpg'


const Header = () => {

  return (
    <div className='container-header'>
      <section className="right-header">
        <img src={Logo} alt="logo image" className='logo' />
        <h1 className="logo-title">
          Our Gym
        </h1>
      </section>
      <Navs/>
    </div>
  )
}

export default Header

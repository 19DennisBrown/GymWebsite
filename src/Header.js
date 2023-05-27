
import React from 'react'
import './Styles/Header.css'
import Navs from './Navs.js'
import Logo from './gymimages/community.jpg'

const Ham = ()=>{
  const clicker = ()=>{
    const ContainerHead = document.querySelector('.container-header')
    ContainerHead.classList.toggle('activate')
  }
  return(
  <div className="_ham">
    <button onClick={clicker} id='btn_ham'>Menu</button>
  </div>
  )
}

const Header = () => {
 
  return (
    <div className='container-header'>
      <section className="right-header">
        <img src={Logo} alt="logo pic" className='logo' />
        <h1 className="logo-title">
          Our Gym
        </h1>
      </section>
      <section className="ham">
        <Ham/>
      </section>      
      <section id="navs">
        <Navs/>
      </section>
    </div>
  )
}

export default Header

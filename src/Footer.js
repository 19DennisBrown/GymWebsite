
import React from 'react'
import './Styles/Footer.css'

const Footer = () => {
  const today = new Date()
  return (
    <div className='container-footer'>
      Footer &copy; {today.getFullYear()}
    </div>
  )
}

export default Footer


import React from 'react'
import './Styles/Member.css'

const Member = () => {
  return (
    <div  className='register'>
      <form action="">
        <h1>Register</h1>
        <label htmlFor="" className="label">
          Name
          <input type="text" placeholder='Danso White' />
        </label>
        <label htmlFor="" className="label">
          Email
          <input type="email" placeholder='den@medis.com' />
        </label>
        <label htmlFor="" className="label">
          Program
          <select id="">
            <option value="">Begginner</option>
            <option value="Intermediary">Intermediary</option>
          </select>
        </label>
        <input type="submit" />
      </form>
    </div>
  )
}

export default Member

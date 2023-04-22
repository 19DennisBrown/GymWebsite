import React from 'react'
import './Styles/Aside.css'
import Space from './gymimages/community.jpg'

const Aside = () => {
  return (
    <div className='aside'>
      <div className="content-contact">
        <section className="image">
          <img src={Space} alt="" />
        </section>
        <section className="description">
          <h1>LEARN MORE ABOUT OUR COMMUNITY.</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem harum neque nulla excepturi eius officiis aliquam! Quas rem aperiam quod, amet assumenda voluptatum, fuga ratione consequuntur repudiandae tempore, at nemo.
          </p>
          <button>
            LEARN MORE
          </button>
        </section>
      </div>
    </div>
  )
}

export default Aside

import React from 'react';
import "./Navbar.css"
import navlogo from './chrome2.png'

const Navbar = () => {
  return (
    <section className='Navbar-section'>
      <header className='Navbar-header'>
        <div className='logoDiv'>
          <img className='logo' src={navlogo} alt="" />
        </div>
        <div className='menu'>
          <ul className='navbar-ul'>
            <li className='home-li'>
               Home 
            </li>
            <li className='home-li'> 
              The Browser by Google
            </li>
            <li className='home-li'>
                Features
            </li>
            <li className='home-li'>
                Support
            </li>
          </ul>
        </div>
      </header>
    </section>
  )
}

export default Navbar;

import React, { Component } from 'react';

import './navbar.css'

export class Navbar extends Component {
  render() {
    return (
        <div className='Navbar'>
            <div className='Navbar__left'>
             <span className="Navbar__brand">TechSnapie </span>Solutions

            </div>
      <div className='Navbar__right'>
      
        <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>Contact</li>
        </ul>
      </div>
      </div>
    )
  }
}

export default Navbar
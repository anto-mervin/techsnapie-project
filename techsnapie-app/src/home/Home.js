import React, { Component } from 'react'
import './Home.css'
import img1 from '../video/img1.jpg'
import img2 from '../video/img2.jpg'
import 'aos'

export default class Home extends Component {
  render() {
    return (
        <div className='img__container' data-aos={"fade-left"}>
        <img src={img1} alt="" srcset="" />
        <img className='fadeInClass' src={img2} alt="" srcset="" />

      <div className='img__content'>
        <p>Businesses Achieve </p>
        <p className='.Animation__text'>' <span> Digital Transformation </span>'</p>
      </div>
      </div>      
    )
  }
}

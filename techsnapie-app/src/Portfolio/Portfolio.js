import React, { Component } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Portfolio.css';
import img1 from './img1.png';
//import img2 from './img2.png';
//import img3 from './img3.png';
//import img4 from './img4.png';
//import img5 from './img5.png';
export default class Portfolio extends Component {
    render() {
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: false,
        appendDots: dots => (
        <div
          style={{
            display:'none'
          }}
        >
          <ul style={{ margin: "0px" }}> {dots} </ul>
        </div>
        ),
        customPaging: i => (
          <div
            style={{
             display:'none'
            }}
          >
            {i + 1}
          </div>
        )
      };
      
      return (
        <div>
          
        <div className="Portfolio__wrapper">
        <div className='Portfolio'>
         <Slider {...settings}>
            <div className='Portfolio__slider'>
              <img src={img1} alt="" srcset="" />
            </div>
            <div className='Portfolio__slider'>
              <img src={img1} alt="" srcset="" />
            </div>
            <div className='Portfolio__slider'>
            <img src={img1} alt="" srcset="" />
            </div>
            <div className='Portfolio__slider'>
            <img src={img1} alt="" srcset="" />
            </div>
            
          </Slider>
        </div>
        </div>
        </div>
      );
    }
  }



import React, { Component } from 'react'
import'./Footer.css'
import tslogo from './ts__logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {faInstagram,faFacebook,faLinkedin,faYoutube,faTwitter} from '@fortawesome/free-brands-svg-icons'

export default class Footer extends Component {
  render() {
    return (
      <div className="footer__wrapper">
        <div className="footer">
            <div className="footer__content">
               <div className="item1__container">
                <div>
                <img src={tslogo} alt="" width={'30px'
                } height={'30px'}/>
                <p className="text">&nbsp;&nbsp;TechSnapie Solutions</p>
                
                </div>
                <p className="subtext">Techsnapie Solutions<br/>
                Coimbatore,<br/>
                TamilNadu,
                India. <br /><br/>
                contact@techsnapie.com <br />
                94449-85694

                </p>
               </div>

            </div>
            <div className="footer__content">
                <div className="footer__heading">Useful Links</div>
                <p className="footer__items">About Us</p>
                <p className="footer__items">Services</p>
                <p className="footer__items">Portfolio</p>
                <p className="footer__items">Contact</p>
                </div>
                <div className="footer__content">
                <div className="footer__heading">Our Services</div>
                <p className="footer__items">Web development</p>
                <p className="footer__items">App development</p>
                <p className="footer__items">Digital marketing</p>
                <p className="footer__items">Graphics designing</p>
                </div>
                <div className="footer__content">
                <div className="footer__heading">Social Links</div>
                <div className="social__icons__container">
                <div className="social__icons">
                <FontAwesomeIcon icon={faInstagram} /></div>
                <div className="social__icons">
                <FontAwesomeIcon icon={faFacebook} /></div>
                <div className="social__icons">
                <FontAwesomeIcon icon={faYoutube} /></div>
                <div className="social__icons">
                <FontAwesomeIcon icon={faLinkedin} /></div>
                <div className="social__icons">
                <FontAwesomeIcon icon={faTwitter} /></div>
                </div>
                
                </div>
           
        </div>
      </div>
    )
  }
}

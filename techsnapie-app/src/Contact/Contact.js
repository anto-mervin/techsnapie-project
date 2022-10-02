import React, { Component } from 'react'
import './Contact.css'
import addressicon from './location.png'
import emailicon from './email.png'
import callicon from './call.png'
export default class Contact extends Component {
  render() {
    return (
     <div className="contact__wrapper">
        <div className="contact__container">
            <div className="contact__details">
                <p className="contact__heading"><span>
                    <img src={addressicon} alt="" /></span>Address:</p>
                <p className="contact__info">{this.props.details[0]}</p>
                <p className="contact__heading"><span>
                    <img src={emailicon} alt="" /></span>&nbsp;Email:</p>
                <p className="contact__info">{this.props.details[1]}</p>
                <p className="contact__heading"><span>
                    <img src={callicon} alt="" /></span>&nbsp;Call:</p>
                <p className="contact__info">{this.props.details[2]}</p>
            </div>
        </div>
        <div className="contact__container">
                <p className='form__heading'>Let's Discuss.</p>
            <form action="" className="form__container">
                <input type="text" className="form__elements" placeholder='Name' />
                <input type="text" className="form__elements" placeholder='Email' />
                <input type="text" className="form__elements" placeholder='Subject' />
                <input type="text" className="form__elements" placeholder='Message' />

            <button className='form__submit'>Submit
            </button>
            </form>
        </div>
     </div>
    )
  }
}

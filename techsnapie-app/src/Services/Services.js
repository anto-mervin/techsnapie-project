import React, { Component } from 'react';
import './Services.css'




export default class Services extends Component {
  render() {
    return (
   
          <div className='card__wrapper'>
        <div className="card">
        <div className="card__img">
           <img src={this.props.img} alt="" />
           </div>
        <p className="card__text">{this.props.card_title}</p>
        <p className="card__description">{this.props.card_desp}</p>
        </div>
      </div>
      
    )
  }
}

import React, { Component } from 'react'
import './Title.css'
export default class Title extends Component {
  render() {
    return (
        <div className='title__container'>
           <p className='subtitle'>{this.props.subtitle}</p>
        <h1 className='title'>{this.props.t1}<span>{this.props.t2}</span></h1>
       
      </div>
    )
  }
}

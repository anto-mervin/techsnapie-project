import React, { Component } from 'react'
import "./Servicepill.css"

export default class Servicepill extends Component {
  render() {
    return (
      <div className="pill__container">
        <div className="pill">
            <p className="pilltext">{this.props.pilltitle}</p>
        </div>  
      </div>
    )
  }
}

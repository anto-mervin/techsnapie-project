import React, { Component } from 'react';

import './About.css';

export default class About extends Component {
  render() {
    return (
      <div className='about'>
        <div className="about__item1" >
            <img src={this.props.picture} alt="text"  />
            </div> 
            <div className="about__item2">
                <p className='heading'>{this.props.heading}</p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium enim consequuntur cupiditate libero soluta amet, eum, animi hic autem ut quisquam ab illo rem dolores quaerat impedit nulla fuga architecto.Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium enim consequuntur cupiditate libero soluta amet, eum, animi hic autem ut quisquam ab illo rem dolores quaerat impedit nulla fuga architecto.
                </p>
            
            
        </div>
        </div>
        )
  }
}

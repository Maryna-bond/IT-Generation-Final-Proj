import React, { Component } from 'react';
import "./Hero.scss";

class Hero extends Component {
  render() {
    return (
      <section className="hero">
        <div className="hero__description">
          <p className="hero__description__subtitle">MODERN INTERIOR</p>
          <h1 className="hero__description__title">Create Your Interior Design.</h1>
          <p className="hero__description__story">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation.
          </p>
          <button className="hero__description__button"><a className='button' href="#contact">CONTACT</a></button>
          <img className='hero__background-dots' src="./img/hero_dots.png" alt="dots" />
        </div>
        
        <div className='hero__image'>
          <img className='hero__image-design' src='./img/hero-pic.jpg' alt="design" />
         <img className='background-rectangle'  alt="rectangle"/>
        </div>
        
      </section>
    );
  }
}

export default Hero;
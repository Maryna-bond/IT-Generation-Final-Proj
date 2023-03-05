import React, { Component } from 'react';
import "./Hero.scss";

class Hero extends Component {
  render() {
    return (
      <section className="hero">
        <div className="hero-section">
          <p className="hero-section__description-add">MODERN INTERIOR</p>
          <h1 className="hero-section__title">Create Your Interior Design.</h1>
          <p className="hero-section__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation.
          </p>
          <button className="hero-section__button">CONTACT</button>
        </div>
        <button className='swiper-arrow-next'><img className='swiper-arrow'  src="././././img/swiper-arrow-right.png"></img></button>
      </section>
    );
  }
}

export default Hero;
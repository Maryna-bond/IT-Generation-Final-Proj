import "./App.scss"
import Header from "./components/header/Header"
import Hero from "./components/hero/Hero"
import ScrollIndicator from "./components/scrollIndicator/ScrollIndicator";
import WhatWeDo from "./components/what_we_do/WhatWeDo"
import React, { Component } from 'react';

export default class App extends Component {
  state = {
    isLoading: true
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState(({ isLoading: false }));
    }, 5000);
  }

  render() {
    return (
      <div className="App">
        {!this.state.isLoading &&
          <>
            <Header />
            <ScrollIndicator />
            <Hero />
            <WhatWeDo />
          </>
        }

        {this.state.isLoading &&
          <div className="loader">
            <div className="loader-content">
              {Array.from({ length: 9 }, () => <div/>)}
            </div>
          </div>
        }
      </div>
    )
  }
}


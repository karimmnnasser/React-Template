import React, {Component} from 'react';

import About from './../About/index'
import Footer from './../Footer/index'
import Home from './../Home/index'
import Portfolio from './../Portfolio/index'
import Profile from './../Profile/index'
import Social from './../Social/index'
import Work from './../Work/index'


class Index extends Component {
  render() {
    return (
      <div className="App">
        <Home />
        <Work />
        <Portfolio />
        <Profile />
        <About />
        <Social />
        <Footer />
      </div>
    );
  }
}

export default Index;
    


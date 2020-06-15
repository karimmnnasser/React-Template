import React, {Component} from 'react';
import {BrowserRouter, Route} from "react-router-dom";

import Contact from './Components/Contact'
import Navbar from './Components/Navbar'
import Index from './Components/index'

import Work from './Components/Work'
import About from './Components/About'
import Portfolio from './Components/Portfolio'
import Profile from './Components/Social'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route exact path = "/" component = {Index} />
          <Route path = "/Contact" component = {Contact} />

          <Route path = "/Work" component = {Work} />
          <Route path = "/About" component = {About} />
          <Route path = "/Portfolio" component = {Portfolio} />
          <Route path = "/Profile" component = {Profile} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
    


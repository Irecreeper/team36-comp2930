import React, { Component } from 'react'
import './App.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import LandingPage from './components/landingpage.js'
import Main from './components/main.js'
import Hello from './components/hello.js';
import About from './components/about.js';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/main" component={Main} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App

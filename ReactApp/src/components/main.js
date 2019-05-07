import React from 'react'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import View_art_but from './view_art_but.js'

import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group'

import Hello from './hello';
import About from './about';

class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      test: true,
    }
  }
  render() {
    const test = this.state
    return (
      <CSSTransition in={test} appear={true} timeout={1000} classNames="fade">
      
      <Router>
        <div>
          <h2>Welcome to React Router Tutorial</h2>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="navbar-nav mr-auto">
              <li><Link to={'/'} className="nav-link">Hello</Link></li>
              <li><Link to={'/about'} className="nav-link">About</Link></li>
            </ul>
          </nav>
          <hr />
          <Switch>
            <Route path='/' component={Hello} />
            <Route path='/about' component={About} />
          </Switch>
        </div>
      </Router>
      
      </CSSTransition>
    )
  }
}

export default Main

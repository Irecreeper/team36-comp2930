import React from 'react'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import View_art_but from './view_art_but.js'
import { CSSTransition } from 'react-transition-group'
import Image from 'react-bootstrap/Image'
import Logo from './images/ven_logo.png'

import About_us_but from './about_us_but.js'
import Contact_but from './contact_but.js'

class NavBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      test: true,
    }
  }
  render() {
    const test = this.state
    return (
      <div class="contain">
        <div class="container">
          <div class="row">
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="Search VEN, or type a keyword..."
              />
              <div class="input-group-append">
                <button
                  id="#search-button"
                  class="btn btn-primary"
                  type="button"
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default NavBar

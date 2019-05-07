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

class NavBar extends React.Component {constructor(props) {
    super(props)
    this.state = {
      test: true,
    }
  }
  render() {
    const test = this.state
    return (
      <div id="holder">
        <nav class="navbar navbar-expand-md fixed-top">
          <div class="container">
            <div class="navbar-collapse collapse nav-content order-2">
              <div class="row mx-auto">
                <div class="col-md-6">
                  <button
                    class="btn btn-outline-success nav-option"
                    type="button"
                  >
                    Environment
                  </button>
                </div>
                <div class="col-md-6">
                  <button
                    class="btn btn-outline-success nav-option"
                    type="button"
                  >
                    Politics
                  </button>
                </div>
              </div>
            </div>
            <div class="nav navbar-nav text-nowrap flex-row mx-md-auto order-1 order-md-2">
              <a class="navbar-brand" href="/">
                <Image src={Logo} className="Logo_Image" fluid rounded />
              </a>
              <button
                id="mobile-nav-button"
                class="navbar-toggler ml-2"
                type="button"
                data-toggle="collapse"
                data-target=".nav-content"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon" />
              </button>
            </div>
            <div class="ml-auto navbar-collapse collapse nav-content order-3 order-md-3">
              <div class="row mx-auto">
              
                <section class="col-md-6">
                    <About_us_but />
                </section>
                
                <section class="col-md-6">
                    <Contact_but />
                </section>
                
              </div>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default NavBar

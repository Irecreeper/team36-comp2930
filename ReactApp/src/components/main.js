import React from 'react'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import View_art_but from './view_art_but.js'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'

import Hello from './hello'
import About from './about'
import Image from 'react-bootstrap/Image'
import Logo from './images/ven_logo.png'

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
              <a class="navbar-brand" href="#">
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
                <div class="col-md-6">
                  <button
                    class="btn btn-outline-success nav-option"
                    type="button"
                  >
                    About
                  </button>
                </div>
                <div class="col-md-6">
                  <button
                    class="btn btn-outline-success nav-option"
                    type="button"
                  >
                    Contact
                  </button>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <div class="container">
          <div id="news-card-area" class="row">
            <div id="news-item" class="col-md-6 col-lg-4">
              <div class="card news-item">
                <a href="#">
                  <img
                    class="card-img-top"
                    src="https://dummyimage.com/600x400/000/fff"
                    alt="Card image"
                  />
                </a>

                <div class="card-body">
                  <h5 class="card-title">EVERYONE DIES IN OIL SPILL</h5>
                  <p class="card-text">
                    All of your friends and family have been drowned in a big
                    ol' oil spillage!
                  </p>
                  <a href="#" class="btn btn-primary">
                    View Comments
                  </a>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4">
              <div class="card news-item">
                <a href="#">
                  <img
                    class="card-img-top"
                    src="https://dummyimage.com/600x400/000/fff"
                    alt="Card image"
                  />
                </a>

                <div class="card-body">
                  <h5 class="card-title">EVERYONE DIES IN OIL SPILL</h5>
                  <p class="card-text">
                    All of your friends and family have been drowned in a big
                    ol' oil spillage!
                  </p>
                  <a href="#" class="btn btn-primary">
                    View Comments
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Main

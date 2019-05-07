import React from 'react'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import View_art_but from './view_art_but.js'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'

import Image from 'react-bootstrap/Image'
import Logo from './images/ven_logo.png'
import Card from './card.js'
import InfiniteScroll from 'react-infinite-scroll-component'

import NavBar from './navbar'

import { render } from 'react-dom'
import InfiniteScroll from 'react-infinite-scroll-component'

const style = {
  height: 30,
  border: "1px solid green",
  margin: 6,
  padding: 8
};

class Main extends React.Component {
  state = {
    items: Array.from({ length: 2 })
  };

  fetchMoreData = () => {
    // a fake async api call like which sends
    // 20 more records in 1.5 secs
    setTimeout(() => {
      this.setState({
        items: this.state.items.concat(Array.from({ length: 2 }))
      });
    }, 1500);
  };

  render() {
    return (
      <div id="holder">
        <NavBar />
        <InfiniteScroll
          dataLength={this.state.items.length}
          next={this.fetchMoreData}
          hasMore={true}
          loader={<h4>Loading...</h4>}
        >
          {this.state.items.map((i, index) => (
      
            <div key={index}>
              div - #{index}
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
          ))}
        </InfiniteScroll>
      

      {/*
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
        */}
      </div>
    )
  }
}

export default Main

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

import axios from 'axios'

const style = {
  height: 30,
  border: '1px solid green',
  margin: 6,
  padding: 8,
}

class Main extends React.Component {
  state = {
    items: Array.from({ length: 2 }),
  }

  componentDidMount() {
    this.getDbArticles().then(data => {
      console.log(data);
      this.setState({articles: data});
      console.log(this.state.articles);
    })
  }

  fetchMoreData = () => {
    setTimeout(() => {
      this.setState({
        items: this.state.items.concat(Array.from({ length: 2 })),
      })
    }, 500)
  }

  getDbArticles() {
  
    return new Promise((resolve, reject) => {
      console.log("Running getDbArticles");
      axios
        .get('http://localhost:9000/api')
        .then(response => {
          resolve(response.data);
          return;
        })
        .catch(error => {
          reject(error.message);
          return;
        });
    });
  }

  render() {
    return (
      <div id="container">
        <NavBar />
        <InfiniteScroll
          dataLength={this.state.items.length}
          next={this.fetchMoreData}
          hasMore={true}
          loader={<h4>Loading...</h4>}
        >
          {this.state.items.map((i, index) => (
            <div key={index}>
              <div class="container">
                <div id="news-card-area" class="row">
                { this.state && this.state.articles && 
                  <Card articles={this.state.articles}/>
                }
                { this.state && this.state.articles && 
                  <Card articles={this.state.articles}/>
                }
                { this.state && this.state.articles && 
                  <Card articles={this.state.articles}/>
                }
                </div>
              </div>
            </div>
          ))}
        </InfiniteScroll>
      </div>
    )
  }
}

export default Main

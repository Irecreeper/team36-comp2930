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
import { useShallowEqual } from 'shouldcomponentupdate-children'

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
    hasMore: true
    
  }

  switchToEnergy = () => {
    this.setState({articles: this.state.articlesEnergy});
    this.setState({articleCount: this.state.articleCountEnergy})
    console.log("Changed to energy articles");
    this.setState({items: Array.from({ length: 0 })})
    this.setState({hasMore: true});
    this.fetchMoreData();
  }

  switchToPollution = () => {
    this.setState({articles: this.state.articlesPollution});
    this.setState({articleCount: this.state.articleCountPollution})
    console.log("Changed to pollution articles");
    this.setState({items: Array.from({ length: 0 })})
    this.setState({hasMore: true});
    this.fetchMoreData();
  }

  switchToRecycling = () => {
    this.setState({articles: this.state.articlesRecycling});
    this.setState({articleCount: this.state.articleCountRecycling})
    console.log("Changed to recycling articles");
    this.setState({items: Array.from({ length: 0 })})
    this.setState({hasMore: true});
    this.fetchMoreData();
  }

  switchToAll = () => {
    this.setState({articles: this.state.articlesAll});
    this.setState({articleCount: this.state.articleCountAll})
    console.log("Changed to all articles");
    this.setState({items: Array.from({ length: 0 })})
    this.setState({hasMore: true});
    this.fetchMoreData();
  }

  componentDidMount() {
    this.getDbArticles().then(data => {
      this.setState({articlesAll: data});
      this.setState({articleCountAll: this.state.articlesAll.length});
      console.log(this.state.articlesAll);
      console.log("Number of unsorted articles: " + this.state.articleCountAll);
    })
    .then(() => {
      this.setState({articles: this.state.articlesAll});
      this.setState({articleCount: this.state.articleCountAll});
    })

    this.getDbArticlesEnergy().then(data => {
      this.setState({articlesEnergy: data});
      this.setState({articleCountEnergy: this.state.articlesEnergy.length});
      console.log(this.state.articlesEnergy);
      console.log("Number of energy articles: " + this.state.articleCountEnergy);
    })

    this.getDbArticlesPollution().then(data => {
      this.setState({articlesPollution: data});
      this.setState({articleCountPollution: this.state.articlesPollution.length});
      console.log(this.state.articlesPollution);
      console.log("Number of pollution articles: " + this.state.articleCountPollution)
    })

    this.getDbArticlesRecycling().then(data => {
      this.setState({articlesRecycling: data});
      this.setState({articleCountRecycling: this.state.articlesRecycling.length});
      console.log(this.state.articlesRecycling);
      console.log("Number of recycling articles: " + this.state.articleCountRecycling);
    })
  }

  fetchMoreData = () => {
    setTimeout(() => {
      this.setState({
        items: this.state.items.concat(Array.from({ length: 2 })),
      })
      console.log(this.state.items.length*3);
      console.log(this.state.articleCount - 6)
      console.log(this.state.hasMore)
      if (this.state.items.length*3 > this.state.articleCount - 6) {
        this.setState({hasMore: false});
      }
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

  getDbArticlesEnergy() {
    return new Promise((resolve, reject) => {
      console.log("Running getDbArticles");
      axios
        .get('http://localhost:9000/api/energy')
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

  getDbArticlesPollution() {
    return new Promise((resolve, reject) => {
      console.log("Running getDbArticles");
      axios
        .get('http://localhost:9000/api/pollution')
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

  getDbArticlesRecycling() {
    return new Promise((resolve, reject) => {
      console.log("Running getDbArticles");
      axios
        .get('http://localhost:9000/api/recycling')
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
    let articles = this.state.articles;
    var articleCount = this.state.articleCount;
    return (
      <div id="container">
        <NavBar
          callback = {this.switchToEnergy}
          callback2 = {this.switchToPollution}
          callback3 = {this.switchToRecycling}
          callback4 = {this.switchToAll}
        />
        <InfiniteScroll
          dataLength={this.state.items.length}
          next={this.fetchMoreData}
          hasMore={this.state.hasMore}
        >
          {this.state.items.map((i, index) => ( //This map should remain inside the InfiniteScroll
            <div key={index}>
              <div className="container">
                <div id="news-card-area" class="row">
                { this.state && this.state.articles && this.state.articleCount && (
                  articleCount--,
                    <Card 
                      _id={articles[articleCount]._id}
                      title={articles[articleCount].title} 
                      description={articles[articleCount].description}
                      image={articles[articleCount].image}
                      url={articles[articleCount].url}
                      />
                )   
                }
                { this.state && this.state.articles && this.state.articleCount && (
                  articleCount--,
                    <Card 
                      _id={articles[articleCount]._id}
                      title={articles[articleCount].title} 
                      description={articles[articleCount].description}
                      image={articles[articleCount].image}
                      url={articles[articleCount].url}
                      />
                )   
                }
                { this.state && this.state.articles && this.state.articleCount && (
                  articleCount--,
                    <Card 
                      _id={articles[articleCount]._id}
                      title={articles[articleCount].title} 
                      description={articles[articleCount].description}
                      image={articles[articleCount].image}
                      url={articles[articleCount].url}
                      />
                )   
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
const PerformantMain = useShallowEqual(Main)

export default PerformantMain

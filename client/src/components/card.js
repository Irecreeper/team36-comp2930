/* 
A card that appears on main.js. These cards hold information about news articles
that we scrape using News API, holding their image, title, and a general description.

Cards will also tilt should you hover over them.
*/

import React from 'react'
import Tilt from 'react-tilt'
import uniqueID from 'react-html-id'
import Comments_but from './comments_page_but'
import VENLogo from './images/ven_logo.png'
import axios from 'axios'

import { useShallowEqual } from 'shouldcomponentupdate-children'


class Card extends React.Component {
  constructor(props) {
    super(props)
    uniqueID.enableUniqueIds(this)
    this.state = {
      _id: this.props._id,
      title: this.props.title,
      description: this.props.description,
      image: this.props.image,
      url: this.props.url
    };
}


componentWillMount() {
  //this.getArticles();
}


/*
A section of old code.

getArticles() {
  axios
    .get(
      'https://newsapi.org/v2/everything?q=vancouver%20AND%20environmental%20AND%20%20NOT%20(police%20OR%20vacation)&pageSize=21&sortBy=publishedAt&apiKey=0b39a6dc7b46419fa77f079a370ebc91',
    )
    .then(res => {
      const articles = res.data.articles
      console.log(articles)
      this.setState({ articles: articles })
    })
    .catch(error => {
      console.log(error)
    })
}
*/


  render() {
    return (
            <div
              id={'articlecard-' + this.nextUniqueId()}
              className="col-lg-4 hideBar"
            >
              {/* The whole card tilts when you hover over it! */}
              <Tilt className="Tilt" options={{ max: 10, scale: 1.04 }}>
                <div className="card card-sm news-item">
                  <a href={this.state.url} target="_blank">
                    <img
                      className="card-img-top card-img-top-sm"
                      //src={news.urlToImage}
                      src={this.state.image}
                      ref={img => this.img = img} 
                      onError={() => this.img.src = VENLogo}
                      alt="Card image"
                    />
                  </a>

                  <div className="card-body">
                    <h5 className="card-title trim">{this.state.title}</h5>
                    <p className="card-text trim">{this.state.description}</p>
                    <div className="trim">
                      <Comments_but id={this.lastUniqueId()} news={this.state} /> {/* repeats ID for ease of use */}

                    </div>
                  </div>
                </div>
              </Tilt>
            </div>
    )
  }
}
const PerformantCard = useShallowEqual(Card) //

export default PerformantCard

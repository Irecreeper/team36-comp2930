import React from 'react'
import Tilt from 'react-tilt'
import uniqueID from 'react-html-id'
import Comments_but from './comments_page_but'
import axios from 'axios'

import { useShallowEqual } from 'shouldcomponentupdate-children'


class Card extends React.Component {
  constructor(props) {
    super(props)
    uniqueID.enableUniqueIds(this)
    this.state = {
      articles: this.props.articles
    };
}


componentWillMount() {
  //this.getArticles();
}

/*
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
      <div className="row">
        {this.state.articles.map(news => {
          return (
            <div
              id={'articlecard-' + this.nextUniqueId()}
              class="col-lg-4"
            >
              <Tilt className="Tilt" options={{ max: 10, scale: 1.04 }}>
                <div class="card card-sm news-item">
                  <a href={news.url} target="_blank">
                    <img
                      class="card-img-top card-img-top-sm"
                      //src={news.urlToImage}
                      src={news.image}
                      alt="Card image"
                    />
                  </a>

                  <div class="card-body">
                    <h5 class="card-title trim">{news.title}</h5>
                    <p class="card-text trim">{news.description}</p>
                    <div class="trim">
                      <Comments_but id={this.lastUniqueId()} />

                    </div>
                  </div>
                </div>
              </Tilt>
            </div>
          )
        })}
      </div>
    )
  }
}
const PerformantCard = useShallowEqual(Card)

export default PerformantCard

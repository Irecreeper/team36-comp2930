import React from 'react'
import Tilt from 'react-tilt'
import uniqueID from 'react-html-id'
import Comments_but from './comments_page_but'
import axios from 'axios'

class Card extends React.Component {
  constructor() {
    super()
    uniqueID.enableUniqueIds(this)
    this.state = {
      articles: [],
    }
  }

  componentWillMount() {
    this.getArticles()
  }

  getArticles() {
    axios
      .get(
        'https://newsapi.org/v2/everything?q=vancouver%20AND%20environmental%20AND%20%20NOT%20(police%20OR%20vacation)&sortBy=publishedAt&apiKey=0b39a6dc7b46419fa77f079a370ebc91',
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

  render() {
    return (
      <div className="row">
        {this.state.articles.map(news => {
          return (
            <div id={'articlecard-' + this.nextUniqueId()} class="col-lg-4">
              <Tilt className="Tilt" options={{ max: 10, scale: 1.04 }}>
                <div class="card card-sm news-item">
                  <a href={news.url}>
                    <img
                      class="card-img-top card-img-top-sm"
                      src={news.urlToImage}
                      alt="Card image"
                      target="_blank"
                    />
                  </a>

                  <div class="card-body">
                    <h5 class="card-title">{news.title}</h5>
                    <p class="card-text">{news.description}</p>
                    <Comments_but />
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

export default Card

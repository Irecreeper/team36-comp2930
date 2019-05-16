import React from 'react'
import Tilt from 'react-tilt'
import uniqueID from 'react-html-id'
import CommentsBut from './comments_page_but'
import axios from 'axios'

class Card extends React.Component {
  constructor(props) {
    super(props)
    uniqueID.enableUniqueIds(this)
    this.state = {
      articles: [],
    }
  }

  componentWillMount() {
    this.getArticles(this.props.default)
  }

  getArticles() {
    axios
      .get(
        'https://newsapi.org/v2/everything?q=vancouver%20AND%20environment&sortBy=popularity&apiKey=0b39a6dc7b46419fa77f079a370ebc91',
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
            <div id={'articlecard-' + this.nextUniqueId()} className="col-lg-4">
            <Tilt className="Tilt" options={{ max: 10, scale: 1.04 }}>
              <div className="card news-item">
                <a href={news.url}>
                  <img
                    className="card-img-top"
                    src={news.urlToImage}
                    alt="Article display"
                  />
                </a>

                <div className="card-body">
                  <h5 className="card-title">{news.title}</h5>
                  <p className="card-text">{news.description}</p>
                  <CommentsBut />
                </div>
              </div>
            </Tilt>
            </div>
          )
        })}
      </div>

      /* found this during a merge conflict; take a look?
      may be broken
      <div>
        {this.state.articles.map(news => {
          return (
            <div id={'articlecard-' + this.nextUniqueId()} class="col2">
              <Tilt className="Tilt" options={{ max: 10, scale: 1.04 }}>
                <div class="card news-item">
                  <a href={news.url} target="_blank">
                    <img
                      class="card-img-top"
                      src={news.urlToImage}
                      alt="Card image"
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
      </div> */
    )
  }
}

export default Card

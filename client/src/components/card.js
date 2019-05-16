import React from 'react'
import Tilt from 'react-tilt'
import uniqueID from 'react-html-id';
import Comments_but from './comments_page_but'
import axios from 'axios'

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
  //console.log(this.props.articles);
  //this.getDbArticles().then(data => console.log(data));
  //this.getDbTest();
}

/*
getArticles() {
  axios.get('https://newsapi.org/v2/everything?q=vancouver%20AND%20environmental%20AND%20%20NOT%20(police%20OR%20vacation)&sortBy=publishedAt&apiKey=0b39a6dc7b46419fa77f079a370ebc91')
  .then(res => {
    const articles = res.data.articles;
    //console.log(articles);
    this.setState({ articles: articles });
  })
  .catch(error => {
    console.log(error);
  });
}
*/

/*
getDbTest() {
  
  console.log("Getting data");
  axios
    .get('http://localhost:9000/api')
    .then(response => {
      let articles = response.data;
      console.log(articles);
    });
    
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
*/

  render() {
    return (
      
      <div id={"articlecard-" + this.nextUniqueId()} class="col-lg-4">
        {/*
        <div>
          <input id={id} type="checkbox" />
          <label htmlFor={id}>label</label>
        </div>*/}
        
        {this.state.articles.map((news) => {
          return (
            <Tilt className="Tilt" options={{ max: 10, scale: 1.04 }}>
            <div class="card news-item">
            <a href={news.url}>
              <img
                class="card-img-top"
                src={news.image}
                alt="Card image"
              />
            </a>

            <div class="card-body">
            
              <h5 class="card-title">{news.title}</h5>
            
              <p class="card-text">
                {news.description}
              </p>
              <a href="#" class="btn btn-primary">
                View Comments
              </a>
            </div>
          </div>
        </Tilt>
          )
        })}
        
      </div>
    )
  }
}

export default Card

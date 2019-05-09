import React from 'react'

class Card extends React.Component {
  render() {
    const test = this.state
    return (
      <div id="news-item" className="col-md-6 col-lg-4">
        <div className="card news-item">
          <a href="#">
            <img
              className="card-img-top"
              src="https://dummyimage.com/600x400/000/fff"
              alt="Card image"
            />
          </a>

          <div className="card-body">
            <h5 className="card-title">EVERYONE DIES IN OIL SPILL</h5>
            <p className="card-text">
              All of your friends and family have been drowned in a big ol' oil
              spillage!
            </p>
            <a href="#" className="btn btn-primary">
              View Comments
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default Card

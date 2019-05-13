import React from 'react'
import Tilt from 'react-tilt'
import uniqueID from 'react-html-id';

class Card extends React.Component {
  constructor() {
    super()
    uniqueID.enableUniqueIds(this)
}

  render() {
    return (
      <div id={"news-" + this.nextUniqueId()} class="col-md-6 col-lg-4">
        {/*
        <div>
          <input id={id} type="checkbox" />
          <label htmlFor={id}>label</label>
        </div>*/}
        <Tilt className="Tilt" options={{ max: 10, scale: 1.04 }}>
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
                All of your friends and family have been drowned in a big ol'
                oil spillage!
              </p>
              <a href="#" class="btn btn-primary">
                View Comments
              </a>
            </div>
          </div>
        </Tilt>
      </div>
    )
  }
}

export default Card

import React from 'react'
import Tilt from 'react-tilt'
import uniqueID from 'react-html-id';
import Comments_but from './comments_page_but'

class Card extends React.Component {
  constructor() {
    super()
    uniqueID.enableUniqueIds(this)
}

  render() {
    return (
      <div id={"articlecard-" + this.nextUniqueId()} class="col-md-6 col-lg-4">
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
                id={"articleimage-" + this.lastUniqueId()}
                src="https://dummyimage.com/600x400/000/fff"
                alt="Card image"
                target="_blank"
              />
            </a>

            <div class="card-body">
              <h5 id={"articletitle-" + this.lastUniqueId()} class="card-title">EVERYONE DIES IN OIL SPILL</h5>
              <p id={"articletext-" + this.lastUniqueId()} class="card-text">
                All of your friends and family have been drowned in a big ol'
                oil spillage!
              </p>
              <Comments_but />
            </div>
          </div>
        </Tilt>
      </div>
    )
  }
}

export default Card

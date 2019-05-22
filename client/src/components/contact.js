/* 
The contact page itself. While currently somewhat bare, there's really not much
that one would need to contact us about.
*/

import React from 'react'
import NavBar from './navbar.js'

class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      test: true,
    }
  }
  render() {
    const test = this.state
    return (
      <div>
        <NavBar />
        <div className="contain">
          <div id="main-content" className="container">
          <h1 className="font-el2">Contact Us</h1>
            <p>
              Vancouver Eco News is always looking for feedback! If you wish to give us 
              feedback, or are a COMP2930 instructor looking to contact us, we highly
              recommend sending us an email or two to either of the following addresses.
            </p>
            <p>
              <b>Manuel:</b> mandaya1@my.bcit.ca <br />
              <b>Paolo:</b> aiurcreeper@gmail.com
            </p>
            {/* WARNING: Link leads to a Rick Roll. You have been warned.*/}
            <p>
              For more information on what VEN is working on at the moment, we would
              like to direct you to a video showcasing our project pitch, which is
              located <a href="https://urlzs.com/WQTA" target="_blank">here on YouTube.</a>
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact

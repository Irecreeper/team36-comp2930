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
        <div class="contain">
          <div id="main-content" class="container">
            This page is currently in progress.
            <br />
            For information on the progress of our development, or if you are a
            COMP2930 instructor looking to contact us, send an email to Team
            36's communication liason:
            <br />
            Manuel Andaya: mandaya1@my.bcit.ca
            <br /><br />
            {/* WARNING: Link leads to a Rick Roll. You have been warned.*/}
            For further viewing of VEN's project scope and design, check out our
            project pitch on <a href="https://urlzs.com/WQTA">YouTube</a>.

          </div>
        </div>
      </div>
    )
  }
}

export default Contact

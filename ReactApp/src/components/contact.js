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
      <div class="panel top">
        <NavBar />

        <div id="main-content" class="container">
          This page is currently in progress.
          <br />
          For information on the progress of our development, or if you are a
          COMP2930 instructor looking to contact us, send an email to Team 36's
          communication liason:
          <br />
          Manuel Andaya: mandaya1@my.bcit.ca
          <br />
          For further viewing of VEN's project scope and design, check out our
          project pitch on <a href="https://urlzs.com/WQTA">youtube</a>.
        </div>
      </div>
    )
  }
}

export default Contact

/* 
The 404 page.
Appears when you head to a page that doesn't exist.
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
          <h1 class="text-center text-white font-el">404 Baby</h1>
          <div id="main-content" class="container">
            Looks like that page doesn't exist friendo!
            <br />
            Either that, or Manuel hasn't fixed the routing issue yet >:@
            <br />
            Please be patient with us.
            <br /><br />
            For further viewing of VEN's project scope and design, check out our
            project pitch on <a href="https://urlzs.com/WQTA">YouTube</a>.

          </div>
        </div>
      </div>
    )
  }
}

export default Contact

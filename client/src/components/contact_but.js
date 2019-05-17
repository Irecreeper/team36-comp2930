/* 
The button that takes you to the Contact Page.
This appears on the header bar.
*/

import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Contact_but extends Component {
  constructor(props) {
    super(props)

    this.go = this.go.bind(this)
  }

  //REMEMBER: There must be a proper "route" established in App.js's <Switch> area!
  go() {
    this.props.history.push('/contact')
  }

  render() {
    return (
      <div className="foo">
        <button
          id="view_button"
          type="button"
          class="btn btn-secondary nav-option"
          onClick={this.go}
        >
          Contact
        </button>
      </div>
    )
  }
}

export default withRouter(Contact_but)

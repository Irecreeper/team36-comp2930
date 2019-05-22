/* 
A special button that appears on the 404 page.
Returns you to the Landing Page.
*/

import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class About_us_but extends Component {
  constructor(props) {
    super(props)

    this.go = this.go.bind(this)
  }

  //REMEMBER: There must be a proper "route" established in App.js's <Switch> area!
  go() {
    this.props.history.push('/')
  }

  render() {
    return (
        <button
          id="view_button"
          type="button"
          className="btn btn-success font_ro"
          onClick={this.go}
        >
          Return to Landing
        </button>
    )
  }
}

export default withRouter(About_us_but)

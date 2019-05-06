import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Main from './main.js'

class View_art_but extends Component {
  constructor(props) {
    super(props)

    this.go = this.go.bind(this)
  }

  go() {
    this.props.history.push('/about')
  }

  render() {
    return (
      <div className="foo">
        <button
          id="view_button"
          type="button"
          class="btn btn-secondary font_ro"
          onClick={this.go}
        >
          About Us
        </button>
      </div>
    )
  }
}

export default withRouter(View_art_but)

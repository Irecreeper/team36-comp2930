import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Main from './main.js'

class View_art_but extends Component {
  constructor(props) {
    super(props)

    this.go = this.go.bind(this)
  }

  go() {
    this.props.history.push('/main')
  }

  render() {
    return (
      <div className="foo">
        <button
          id="view_button"
          type="button"
          class="btn btn-success nav-option"
          onClick={this.go}
        >
          Environment
        </button>
      </div>
    )
  }
}

export default withRouter(View_art_but)

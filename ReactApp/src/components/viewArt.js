import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Main from './main.js'

class viewArt extends Component {
  constructor(props) {
    super(props)

    this.goHome = this.goHome.bind(this)
  }

  goHome() {
    this.props.history.push('/main')
  }

  render() {
    return (
      <div className="foo">
        <button
          id="view_button"
          type="button"
          class="btn btn-primary font_ro"
          onClick={this.goHome}
        >
          View articles
        </button>
      </div>
    )
  }
}

export default withRouter(viewArt)

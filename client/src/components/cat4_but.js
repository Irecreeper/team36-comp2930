import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Main from './main.js'

class Cat4_but extends Component {
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
          className="btn btn-success nav-option"
          onClick={this.go}
        >
          Category 4
        </button>
      </div>
    )
  }
}

export default withRouter(Cat4_but)

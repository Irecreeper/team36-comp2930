import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Contact_but extends Component {
  constructor(props) {
    super(props)

    this.go = this.go.bind(this)
  }

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

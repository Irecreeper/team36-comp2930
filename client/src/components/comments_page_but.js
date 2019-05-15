import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class About_us_but extends Component {
  constructor(props) {
    super(props)

    this.go = this.go.bind(this)
  }

  go() {
    this.props.history.push('/comments');
    this.testID(this.id)
  }
  
  testID(anID) {
    alert(anID);
  }

  render() {
    return (
      <div className="foo">
        <button
          id="view_button"
          type="button"
          class="btn btn-primary"
          onClick={this.go}
        >
          Read Comments
        </button>
      </div>
    )
  }
}

export default withRouter(About_us_but)

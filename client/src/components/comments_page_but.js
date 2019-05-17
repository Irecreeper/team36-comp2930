/* 
A button that appears on all instances of "Card.js".
This button will take you to the comments page of the selected news article.
*/

import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class About_us_but extends Component {
  constructor(props) {
    super(props)

    this.go = this.go.bind(this)
  }

  go() {
    this.props.history.push('/comments/' + this.props.id);
    
    {/* for testing unique id
    this.testID(this.props.id)*/}
  }
  
  /* to test ids
  testID(anID) {
    alert(anID);
  }
  */

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

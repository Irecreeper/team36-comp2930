/* 
A simple button that appears on the header navigation bar.
Vaguely named in case we want to change the category without reformatting the webpage.
*/

import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Main from './main.js'

class Cat3_but extends Component {
  constructor(props) {
    super(props)

    this.go = this.go.bind(this)
  }

  //REMEMBER: There must be a proper "route" established in App.js's <Switch> area!
  go() {
    if(this.props.callback3)
      this.props.callback3();
      else this.props.history.push({
        pathname: '/main',
        default: 'recycling'
      })
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
          Recycling
        </button>
      </div>
    )
  }
}

export default withRouter(Cat3_but)

/* 
A button that appears on all instances of "Card.js".
This button will take you to the comments page of the selected news article.
*/

import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Comments } from 'react-facebook';

import comment_page from './comment_page';

class comments_but extends Component {
  constructor(props) {
    super(props)

    this.go = this.go.bind(this)
  }

  go() {
    this.props.history.push({
      pathname: '/comments/' + this.props.news.title,
    });
    localStorage.setItem('news', JSON.stringify(this.props.news));
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

export default withRouter(comments_but)

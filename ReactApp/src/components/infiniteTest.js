import React from 'react'
import Card from './card'

var AllCards = React.createClass({
  getInitialState() {
    // Start with an empty array of posts.
    // Ideally, you want this component to do the data fetching.
    // If the data comes from a non-react source, as in your example,
    // you can do `posts: this.props.posts`, but this is an anti-pattern.
    return { cards: [] }
  },

  componentWillMount() {
    // Fetch the initial list of posts
    // I'm assuming here that you have some external method that fetches
    // the posts, and returns them in a callback.
    // (Sorry for the arrow functions, it's just so much neater with them!)
    ajaxMethodToFetchPosts(cards => {
      this.setState({ cards: cards })
    })
  },

  componentDidMount() {
    // Attach your scroll handler here, to fetch new posts
    // In a real example you'll want to throttle this to avoid too many requests
    window.addEventListener('scroll', () => {
      ajaxMethodToFetchPosts(cards => {
        this.setState({
          cards: this.state.cards.slice().concat(posts),
        })
      })
    })
  },

  render() {
    // Render method unchanged :)
    return (
      <div>
        {this.props.data.map(function(element, i) {
          return <Post data={element} />
        })}
      </div>
    )
  },
})

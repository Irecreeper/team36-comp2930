import React from 'react'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import View_art_but from './view_art_but.js'
import { CSSTransition } from 'react-transition-group'

class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      test: true,
    }
  }
  render() {
    const test = this.state
    return (
      <CSSTransition in={test} appear={true} timeout={1000} classNames="fade">
        <div>
          <h2> HELLO </h2>
        </div>
      </CSSTransition>
    )
  }
}

export default Main

import React from 'react'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import View_art_but from './view_art_but.js'
import About_us_but_lp from './about_us_but_lp.js'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import Image from 'react-bootstrap/Image'
import Logo from './images/ven_logo.png'
import InfiniteScroll from 'react-infinite-scroll-component'

class LandingPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      test: true,
    }
  }
  render() {
    const test = this.state
    return (
      <div className="text-center text-white">
        <div class="panel top">
          <main role="main" className="cover">
            <Image
              src={Logo}
              className="person-mug mx-auto d-block"
              alt="Eco Standards"
              id="logo"
              fluid
              rounded
            />
            <h1 class="text-on-background-lg font-el">Vancouver Eco News</h1>
            <h2 class="text-on-background-lg font-el">
              Your local news aggregate for all things green
            </h2>
            <div id="nav-options" className="container is-narrow">
              <div className="row border-between">
                <div className="col-md-4">
                  <h3 className="font-ro">View Articles</h3>
                </div>
                <div className="col-md-4">
                  <p className="font-ro">
                    Interested in enviromental and ecological news? Come view
                    some amazing articles.
                  </p>
                </div>
                <div className="col-md-4">
                  <section>
                    <View_art_but />
                  </section>
                </div>
              </div>
            </div>

            <footer id="landing-footer">
              <section>
                <About_us_but_lp />
              </section>
              <p className="text-on-background-sm font-ro">
                Copyright some random dudes in a room
              </p>
            </footer>
          </main>
        </div>
      </div>
    )
  }
}

export default LandingPage

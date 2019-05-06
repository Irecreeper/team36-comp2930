import React from 'react'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import View_art_but from './view_art_but.js'

class LandingPage extends React.Component {
  render() {
    return (
      <div className="root">
        <div class="text-center">
          <div
            id="main_display"
            class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column"
          >
            <main role="main" class="cover">
              <img
                id="logo"
                src="https://dummyimage.com/400x300/000000/ffffff&text=Vancouver+Eco+News"
              />
              <h1 class="text_on_background_lg font_el">Vancouver Eco News</h1>
              <h2 class="text_on_background_lg font_el">
                Your local news aggregate for all things green
              </h2>
              <div id="nav_options" class="container is-narrow">
                <div class="row border-between">
                  <div class="col-md-4">
                    <h3 class="font_ro">View Articles</h3>
                  </div>
                  <div class="col-md-4">
                    <p class="font_ro">
                      Interested in enviromental and ecological news? Come view
                      some amazing articles.
                    </p>
                  </div>
                  <div class="col-md-4">
                    <section>
                      <View_art_but />
                    </section>
                  </div>
                </div>
              </div>
            </main>
            <footer class="mastfoot mt-auto">
              <button type="button" class="btn btn-secondary">
                About Us
              </button>
              <p class="text_on_background_sm font_ro">
                Copyright some random dudes in a room
              </p>
            </footer>
          </div>
        </div>
      </div>
    )
  }
}

export default LandingPage

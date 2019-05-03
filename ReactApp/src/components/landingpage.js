import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Alert from "react-bootstrap/Alert";

class LandingPage extends React.Component {
  render() {
    return (
      <div className="root">
        <div
          id="main_display"
          class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column"
        >
          <main role="main" class="cover">
            <img
              id="logo"
              src="https://dummyimage.com/400x300/000000/ffffff&text=Vancouver+Eco+News"
            />
            <h1>Vancouver Eco News</h1>
            <h2>Your local news aggregate for all things green</h2>
            <div id="nav_options" class="container is-narrow">
              <div class="row">
                <div class="col-md-4 align-middle">
                  <h3>View Articles</h3>
                </div>
                <div class="col-md-4 align-middle">
                  <p>
                    <b>
                      Interested in enviromental and ecological news? Come view
                      some amazing articles.
                    </b>
                  </p>
                </div>
                <div class="col-md-4 align-middle">
                  <button
                    id="view_button"
                    type="button"
                    class="btn btn-primary"
                  >
                    View Articles
                  </button>
                </div>
              </div>
            </div>
          </main>
          <footer class="mastfoot mt-auto">
            <button type="button" class="btn btn-secondary">
              About Us
            </button>
            <p>Copyright some random dudes in a room</p>
          </footer>
        </div>
      </div>
    );
  }
}

export default LandingPage;

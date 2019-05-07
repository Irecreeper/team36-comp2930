import React from 'react'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Alert from 'react-bootstrap/Alert'

class LandingPage extends React.Component {
  render() {
    return (
      <div className="root">

        <div id="holder">

            <div id="about-us" class="container">
              <h1 class="font-el">Who is VEN?</h1>
              <p>We're a bunch of nerds, who specialize in makin' memes and designin' themes.</p>

              <h2 class="font-el">Our Mission</h2>
              <p>We wish to conquer the earth or something.</p>

              <h2 class="font-el">The People of VEN</h2>
              <p>Here is the team of nerds that worked on VEN.</p>
              <div class="row">
                <div class="col-md-4 person-id">
                  <h3 class="font-el">Manuel Andaya</h3>
                  <img src="https://dummyimage.com/200x200/000/fff&text=Person" class="person-mug" />
                        <p>Person is a...</p>
                </div>
                <div class="col-md-4 person-id">
                  <h3 class="font-el">Joel Colussi</h3>
                  <img src="https://dummyimage.com/200x200/000/fff&text=Person" class="person-mug" alt="Mugshot of Person"/>
                        <p>Person is a...</p>
                </div>
                <div class="col-md-4 person-id">
                  <h3 class="font-el">Paolo Del Rio</h3>
                  <img src="https://dummyimage.com/200x200/000/fff&text=Person" class="person-mug" alt="Mugshot of Person"/>
                        <p>Person is a...</p>
                </div>
                <div class="col-md-4 person-id">
                  <h3 class="font-el">Alec Martin</h3>
                  <img src="https://dummyimage.com/200x200/000/fff&text=Person" class="person-mug" alt="Mugshot of Person"/>
                        <p>Person is a...</p>
                </div>
                <div class="col-md-4 person-id">
                  <h3 class="font-el">Zachary Oyama</h3>
                  <img src="https://dummyimage.com/200x200/000/fff&text=Person" class="person-mug" alt="Mugshot of Person"/>
                        <p>Person is a...</p>
                </div>
              </div>
            </div>
        </div>


        </div>
        )
      }
    }
    
    export default LandingPage

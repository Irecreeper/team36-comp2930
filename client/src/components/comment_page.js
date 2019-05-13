import React from 'react'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import View_art_but from './view_art_but.js'
import { CSSTransition } from 'react-transition-group'
import Image from 'react-bootstrap/Image'
import Standards from './images/ecostandards.jpg'

import Konami from './konami.js'

import NavBar from './navbar.js'

class CommentPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            test: true,
        }
      }

    render() {
        const test = this.state;
        return (
            <div id="holder">
                <NavBar />

                <div class="container"> {/* Page Content */}
                    <div class="card mb-3">
                        {/* Card Image */}
                        <a href="#" target="_blank"> {/* Clicking on the image will take you to the article address. */}
                            <img class="card-img-top" src="https://dummyimage.com/1300x200/000/fff" alt="Article" />
                        </a>
                        
                        <div class="card-body">
                            {/* News Article Area */}
                            <h5 class="card-title">EVERYONE DIES IN OIL SPILL</h5>
                            <p class="card-text">
                                All of your friends and family have been drowned in a big ol' oil spillage! The tragedy occured 
                                last sunday because somebody dropped their hotdog off a dock. They dove off to grab their dropped 
                                sausage, and slammed into an oil tanker on the way down. The resulting detonation not only levelled 
                                the town of Oscarmeyerwienermobile, but sprayed a cubic heckton of burning oil everywhere! This 
                                killed literally every fish in the ocean, and thus caused everyone to starve to death.
                            </p>
                            <p>
                                This post is dedicated as a memorial to mankind, and how their avarice and lust for delicious 
                                cooked sausages ended all that they held dear.
                            </p>

                            <hr/>

                            {/* Comment Writing Area / Recaptcha */}
                            <div class="row">
                                <div class="col-md-6">
                                    <input type="name" id="comment-name" class="form-control" aria-describedby="usernameArea" placeholder="Username"/>
                                    <textarea id="comment-name" class="form-control" rows="4" placeholder="Write a comment here..."></textarea>
                                    <div class="d-flex justify-content-center justify-content-md-end">
                                        <button class="btn btn-primary" type="button">Submit</button>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <img class="d-block mx-auto" src="images/example_captcha.png" width="400px" height="100px" alt="captcha" />
                                </div>
                            </div>

                            <hr/>
                            
                            {/* Comment Area */}
                            <div id="comment-area">
                                <div class="comment">
                                    <h5>Commenter</h5>
                                    <p>i'm literally dying help</p>
                                </div>
                                <div class="comment">
                                    <h5>Commenter</h5>
                                    <p>my cat is on fire aaaaaaa</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CommentPage
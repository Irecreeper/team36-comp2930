/* 
The Comments Page that is associated with every article.
Contains an image, the title, and a somewhat expanded look on the article.
Also features a section down below to make and read comments.
*/

import React from 'react'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import { CSSTransition } from 'react-transition-group'
import Image from 'react-bootstrap/Image'
import Standards from './images/ecostandards.jpg'

import Konami from './konami.js'

import NavBar from './navbar.js'
import { FacebookProvider, Comments } from 'react-facebook'

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
                <div className="contain">
                    <div className="container"> {/* Page Content */}
                        <div className="card mb-3">
                            {/* Card Image */}
                            <a href="#" target="_blank"> {/* Clicking on the image will take you to the article address. */}
                                <img class="card-img-top" src="https://dummyimage.com/1300x200/000/fff" alt="Article" />
                            </a>

                            <div className="card-body">
                                {/* News Article Area */}
                                <h5 className="card-title">EVERYONE DIES IN OIL SPILL</h5>
                                <p className="card-text">
                                    All of your friends and family have been drowned in a big ol' oil spillage! The tragedy occured
                                    last sunday because somebody dropped their hotdog off a dock. They dove off to grab their dropped
                                    sausage, and slammed into an oil tanker on the way down. The resulting detonation not only levelled
                                    the town of Oscarmeyerwienermobile, but sprayed a cubic heckton of burning oil everywhere! This
                                    killed literally every fish in the ocean, and thus caused everyone to starve to death.
                                </p>
                                <p>
                                    This post is dedicated as a memorial to mankind, and how their avarice and lust for delicious
                                    cooked sausages ended all that they held dear.
                                    {}
                                </p>

                                <hr />

                                {/* This page makes use of the Facebook Comments API. */}
                                <FacebookProvider appId="281178766160238">
                                    <Comments />
                                </FacebookProvider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CommentPage
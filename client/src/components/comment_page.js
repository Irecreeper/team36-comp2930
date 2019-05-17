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
            news: JSON.parse(localStorage.getItem('news'))
        }
    }

    componentDidMount() {
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
                            <a href={this.state.news.url} target="_blank"> {/* Clicking on the image will take you to the article address. */}
                                <img class="card-img-top" src={this.state.news.image} alt="Article" />
                            </a>

                            <div className="card-body">
                                {/* News Article Area */}
                                <h5 className="card-title">{this.state.news.title}</h5>
                                <p className="card-text">
                                    {this.state.news.description}
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

window.FB.XFBML.parse();
export default CommentPage
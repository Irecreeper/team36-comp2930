/* 
The navigation bar. With the expection of the Landing Page, it appears on every page.
Using some bootstrap properties, the NavBar sticks to the top of the page, scrolling
with the user.

It holds a variety of buttons that lead the user around the webpage.
*/

import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Image from 'react-bootstrap/Image'
import Logo from './images/ven_logo.png'

import About_us_but from './about_us_but.js'
import Contact_but from './contact_but.js'
import Cat1_but from './cat1_but.js'
import Cat2_but from './cat2_but.js'
import Cat3_but from './cat3_but.js'
import Cat4_but from './cat4_but.js'

class NavBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      test: true,
    }
  }
  render() {
    const test = this.state
    return (
      <Navbar expand="md" className="sticky-top" id="Opacity">
        <Navbar.Collapse id="basic-navbar-nav" className="order-3 order-md-1">
          <Nav className="mx-auto">
            <Cat1_but className="nav_option" />
            <Cat2_but className="nav_option" />
            <Cat3_but className="nav_option" />
          </Nav>
        </Navbar.Collapse>

        {/* The logo! Note that the order-# tags move it around based on screen size. */}
        <a className="navbar-brand order-1 order-md-2" href="/">
          <Image src={Logo} className="Logo_Image" fluid rounded />
        </a>

        <Navbar.Collapse id="basic-navbar-nav" className="order-4 order-md-3">
          <Nav className="mx-auto">
            <Cat4_but className="nav_option" />
            <About_us_but className="nav_option"/>
            <Contact_but className="nav_option"/>
          </Nav>
        </Navbar.Collapse>

        <Navbar.Toggle
          id="mobile-nav-button"
          className="order-2"
          aria-controls="basic-navbar-nav"
        /> {/* This toggles the navbar on smaller screen sizes. */}
      </Navbar>
    )
  }
}

export default NavBar

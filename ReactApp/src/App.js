import React, { Component } from "react";
import "./App.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import AnchorLink from "react-anchor-link-smooth-scroll";
import LandingPage from "./components/landingpage.js";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar
          className="header-color"
          expand="lg"
          fixed="top"
          variant="dark"
          collapseOnSelect="true"
        >
          <AnchorLink href="#home">
            <Navbar.Brand>VEN</Navbar.Brand>
          </AnchorLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="navLinks">
              <AnchorLink href="#aboutLink">
                <Nav.Link href="#aboutLink" />
              </AnchorLink>
              <AnchorLink href="#skillLink">
                <Nav.Link href="#skillLink" />
              </AnchorLink>
              <AnchorLink href="#projectLink">
                <Nav.Link href="#projectLink" />
              </AnchorLink>
              <AnchorLink href="#resLink">
                <Nav.Link href="#resLink" />
              </AnchorLink>
              <AnchorLink href="#conLink">
                <Nav.Link href="#resLink" />
              </AnchorLink>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div className="page-content" />
        <LandingPage />
      </React.Fragment>
    );
  }
}

export default App;

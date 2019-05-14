import React, { Component } from 'react'
import './App.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import LandingPage from './components/landingpage.js'
import Main from './components/main.js'
import About from './components/about.js'
import Contact from './components/contact.js'
import Comments from './components/comment_page.js'
import NotFound from './components/404.js'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/main" component={Main} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/comments" component={Comments} />
            <Route component={NotFound}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App

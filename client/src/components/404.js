/* 
The 404 page.
Appears when you head to a page that doesn't exist.
*/

import React from 'react'
import NavBar from './navbar.js'
import Button404 from './404_button.js'

class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      test: true,
    }
  }
  render() {
    const test = this.state
    return (
      <div>
        <NavBar />
        <div class="contain">
          <h1 class="text-center text-on-background-lg font-el">404: Page Not Found</h1>
          <div id="main-content" class="container">
            <p>
              The URL you tried to access did not exist on our servers. Perhaps you followed 
              a faulty link, misinput the URL, or the page no longer exists due to a change 
              in website structure? Who really knows, besides Paolo? He better not have freaking
              screwed with the structure again, that piece of-
            </p>
            <p>
              ...Fortunately, your journey doesn't end here! You can either <b>make use of the Navigation
              Bar above</b> to go back to the website, and read some amazing articles about our planet! Or
              perhaps, you can just <b>click on this button at the bottom of the box</b> to return to the 
              landing page. It doesn't really matter too much.
            </p>
            <div className="d-flex justify-content-center">
              <Button404 />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact

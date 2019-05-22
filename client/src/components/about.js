/* 
The About Us page. It consists of a few paragraphs about VEN's mission, as well
as a quick, very casual overview of the five of us who created VEN.
*/

import React from 'react'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import View_art_but from './view_art_but.js'
import { CSSTransition } from 'react-transition-group'
import Image from 'react-bootstrap/Image'
import Logo from './images/ven_logo.png'
import Zach from './images/zach_mug.png'
import Alec from './images/alec_mug.png'
import Joel from './images/joel_mug.png'
import Manuel from './images/manuel_mug.png'
import Paolo from './images/paolo_mug.png'
import Standards from './images/ecostandards.jpg'

import Konami from './konami.js'

import NavBar from './navbar.js'

class About extends React.Component {
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
        <div className="contain">
        <div id="main-content" className="container">
          {/* About Company */}
          <h1 className="font-el2">What is VEN?</h1>
          <p>
            VEN, short for <i>Vancouver Eco News</i>, is a Vancouver-based news
            aggregator that collects articles on the environment from our
            various trusted sources, and places them all in one webpage for
            easy, comfy viewing! You may also chat about these 
            articles with other Vancouverites using VEN’s built in comments page, 
            which makes use of the Facebook Comments API.
          </p>

          <p>
            This website was built using HTML5, CSS3, JavaScript, Bootstrap and
            ReactJS on the front-end, while MongoDB and NodeJS were used for the
            back-end. Our website is hosted on Microsoft Azure. It was also
            specifically designed for BCIT’s second-term Projects Course, which
            was sponsored by the folks at EcoCity.
          </p>

          <h1 className="font-el2">Our Mission</h1>
          <p>
            Vancouver Eco News was created so that Vancouverites (and others
            around the world) could easily keep up with all of the eco-based
            news that our city has to offer. Normally, if one is concerned with
            environmental topics, it can be a pain to jump from website to
            website to find out that is happening with our environment.
          </p>

          <p>
            We hope to alleviate those problems with VEN- your local news
            aggregate for all things green! With all of these articles condensed
            onto one website, it’ll be far easier to see the bigger picture of
            our environment, and how we fit into EcoCity’s standards for a truly
            green city.
          </p>

          <a href="ecostandards.jpg">
            <Image
              src={Standards}
              className="person-mug mx-auto d-block"
              alt="Eco Standards"
              fluid
              rounded
            />
          </a>

          <p>
            Only with proper knowledge can we truly make Vancouver a true
            EcoCity. Be sure to check VEN daily to see Vancouver’s current
            status, and perhaps learn what you can do to help our environment.
            Every little bit helps!
          </p>

          {/* About Staff */}
          <h1 className="font-el2">The People of VEN</h1>
          <p>Here is a brief overview of those who worked on VEN.</p>
          <div className="row">
            <div className="col-md-4 about_person">
              <h2 className="font-el text-center">Manuel</h2>
              <Image
                src={Manuel}
                className="Mug_Image"
                alt="Mugshot of Person"
                fluid
                rounded
              />
              <p>
                Manuel is a taekwondo enthusiast and instructor, who now
                practices web development at BCIT. He has a passion for gaming
                and anime, and also enjoys combat sports and exercise.
              </p>
            </div>
            <div className="col-md-4 about_person">
              <h2 className="font-el text-center">Joel</h2>
              <Image
                src={Joel}
                className="Mug_Image"
                alt="Mugshot of Person"
                fluid
                rounded
              />
              <p>
                Joel is a hard worker who did labour jobs for three years before
                coming to BCIT so that he could join the growing industry of
                programmers. He’s a fan of gaming, especially platformer games.
              </p>
            </div>
            <div className="col-md-4 about_person">
              <h2 className="font-el text-center">Paolo</h2>
              <Image
                src={Paolo}
                className="Mug_Image"
                alt="Mugshot of Person"
                fluid
                rounded
              />
              <p>
                Paolo is fresh out of highschool, and he aspires to become a
                fully-fledged game developer, and is fascinated by the games
                industry and all of its happenings. For now though, he is more
                than happy to study at BCIT.
              </p>
            </div>
            <div className="col-md-4 about_person">
              <h2 className="font-el text-center">Alec</h2>
              <Image
                src={Alec}
                className="Mug_Image"
                alt="Mugshot of Person"
                fluid
                rounded
              />
              <p>
                Alec is an approachable person that loves to learn and work. He
                strives to learn new things every day, and become the best that
                he can be. In his spare time, he loves to hang out with friends
                or play video games like DotA.
              </p>
            </div>
            <div className="col-md-4 about_person">
              <h2 className="font-el text-center">Zachary</h2>
              <Image
                src={Zach}
                className="Mug_Image"
                alt="Mugshot of Person"
                fluid
                rounded
              />
              <p>
                Zachary is the product owner of Vancouver Eco News. He’s quite
                active, playing plenty of sports- specifically, basketball and
                soccer. In his spare time, he also enjoys playing tabletop games
                with his friends.
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
    )
  }
}

export default About

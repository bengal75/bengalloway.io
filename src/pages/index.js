import React from "react";
import Helmet from "react-helmet";
import Waypoint from "react-waypoint";

import Layout from "../components/layout";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Scroll from "../components/Scroll";

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stickyNav: false,
    };
  }

  _handleWaypointEnter = () => {
    this.setState(() => ({ stickyNav: false }));
  };

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }));
  };

  render() {
    return (
      <Layout noGlobalNav>
        <Helmet title="Dr. Ben Galloway" />

        <Header />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        />
        <Nav sticky={this.state.stickyNav} />

        <div id="main">
          <section id="about" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>About Me</h2>
                  <p>
                    I am a full-stack JavaScript developer with a PhD in
                    computational particle physics and a love of using web
                    technologies to improve people's lives. I understand the
                    transformative power of technology, and I believe in making
                    it understandable and accessible to everyone.
                  </p>
                </header>
                <p>
                  I am adept at taking digital ideas from conception to
                  widespread use, with experience in setting up, using, teaching
                  and administrating Linux systems; technical consultancy and
                  content creation; science communication and education; and
                  theatre production and performance.
                </p>
                <p>
                  This unique combination of technical and communication skills
                  has led me through a number of interesting projects. Read more
                  about them below, or if you have a need for this blend of
                  know-how, don't hesitate to drop me a line.
                </p>
                <ul className="actions">
                  <li>
                    <Scroll type="id" element="footer">
                      <a href="/" className="button">
                        Get In Touch
                      </a>
                    </Scroll>
                  </li>
                </ul>
              </div>
              <span className="icon major style2 fa-users" />
            </div>
          </section>

          <section id="software" className="main special">
            <header className="major">
              <h2>Software</h2>
            </header>
            <ul className="features">
              <li>
                <span className="icon major style1 fa-ticket" />
                <h3>
                  <a
                    href="https://today.gsc.org.uk"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GSC Today
                  </a>
                </h3>
                <p>
                  An internal events and statistics dashboard for{" "}
                  <a
                    href="https://www.glasgowsciencecentre.org"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Glasgow Science Centre
                  </a>
                  .
                </p>
                <p>
                  Powered by a React frontend and a GraphQL backend,
                  implementing a semi-permanent cache of the ticketing system's
                  SOAP API.
                </p>
              </li>
              <li>
                <span className="icon major style4 fa-sign-language" />
                <h3>
                  <a
                    href="https://itunes.apple.com/gb/app/glasgow-science-centre-bsl-app/id1199443188"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    BSL Accessibility App
                  </a>
                </h3>
                <p>
                  A mobile app to deliver exhibit interpretation in British Sign
                  Language for visitors to{" "}
                  <a
                    href="https://www.glasgowsciencecentre.org"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Glasgow Science Centre
                  </a>
                  .
                </p>
                <p>
                  Implemented in React Native with videos using HLS for adaptive
                  streaming.
                </p>
              </li>
              <li>
                <span className="icon major style2 fa-file-archive-o" />
                <h3>
                  <a
                    href="https://upload.cecilianarchives.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Cecilian Society Archives
                  </a>
                </h3>
                <p>
                  Historical record storage for the{" "}
                  <a
                    href="https://www.ceciliansociety.co.uk"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Cecilian Society
                  </a>
                  .
                </p>
                <a href="https://github.com/cecilian-archives">
                  https://github.com/cecilian-archives
                </a>
              </li>
              <li>
                <span className="icon major style5 fa-user-md" />
                <h3>
                  <a
                    href="https://iob.bengalloway.io"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Insulin on Board
                  </a>
                </h3>
                <p>
                  A{" "}
                  <a
                    href="https://developers.google.com/web/progressive-web-apps"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Progressive Web App
                  </a>{" "}
                  to keep track of insulin doses for people (like me!) with
                  diabetes.
                </p>
                <p>
                  Uses{" "}
                  <a
                    href="https://material-ui.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Material-UI
                  </a>{" "}
                  for styling and keeps data in localStorage. Next experiment is
                  data synchronisation between devices.
                </p>
              </li>
              <li>
                <span className="icon major style3 fa-calendar-o" />
                <h3>
                  <a
                    href="https://whatsonatthehydrotonight.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    What's On at the Hydro Tonight?
                  </a>
                </h3>
                <p>
                  A single-purpose web page in the style of{" "}
                  <a
                    href="https://isitchristmas.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    IsItChristmas.com
                  </a>{" "}
                  to report what's playing today at the{" "}
                  <a
                    href="https://www.thessehydro.com/whats-on"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    SSE Hydro
                  </a>{" "}
                  arena in Glasgow, Scotland.
                </p>
                <p>
                  Hosted on{" "}
                  <a
                    href="https://www.netlify.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Netlify
                  </a>
                  , making use of Netlify Functions to call the{" "}
                  <a
                    href="https://developer.ticketmaster.com/products-and-docs/apis/discovery-api/v2/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ticketmaster API
                  </a>{" "}
                  without exposing API keys.
                </p>
              </li>
            </ul>
            <footer className="major">
              <ul className="actions">
                <li>
                  <a href="https://github.com/bengal75" className="button">
                    See More on GitHub
                  </a>
                </li>
              </ul>
            </footer>
          </section>

          <section id="communication" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>Communication</h2>
                  <p>
                    I have contributed to several projects run by{" "}
                    <a
                      href="https://www.sciencefestival.co.uk/worldwide"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Edinburgh Science Worldwide
                    </a>
                    , mainly developing and delivering educational content for
                    the{" "}
                    <a href="https://twitter.com/uaecyberquest?lang=en">
                      Cyber Quest
                    </a>{" "}
                    programme in the United Arab Emirates.
                  </p>
                </header>
                <p>My roles have included:</p>
                <ul>
                  <li>
                    Developing and delivering{" "}
                    <a href="https://blockchain.bengalloway.io">
                      content for technical workshops
                    </a>{" "}
                    aimed at secondary school and university-level students
                  </li>
                  <li>
                    Consultancy on technical concepts, and creation of{" "}
                    <a href="https://drive.google.com/file/d/1uGfozT5W6D5JSNe0ZKKXCVrwIhK-waZc/view">
                      technical training guides
                    </a>
                  </li>
                  <li>
                    Leadership and technical training of teams of science
                    communicators
                  </li>
                  <li>On-the-ground workshop delivery</li>
                </ul>
              </div>
              <span className="icon major style5 fa-comments" />
            </div>
          </section>

          <section id="science" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>Science</h2>
                  <p>
                    I hold a Ph.D. in computational particle physics and an
                    M.Sci. in Physics and Astronomy, both from the{" "}
                    <a
                      href="https://www.gla.ac.uk/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      University of Glasgow
                    </a>
                    .
                  </p>
                </header>
                <p>
                  My Masters project involved research into{" "}
                  <a
                    href="https://web.fnal.gov/organization/theory/TheoreticalPhysicsSeminars/2017/Laiho.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    lattice quantum gravity
                  </a>{" "}
                  under the supervision of{" "}
                  <a
                    href="http://thecollege.syr.edu/people/faculty/pages/phy/laiho-jack.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Dr. Jack Laiho
                  </a>
                  , and my doctoral research was in the field of{" "}
                  <a
                    href="https://en.wikipedia.org/wiki/Lattice_QCD"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    lattice QCD
                  </a>{" "}
                  under the supervision of{" "}
                  <a
                    href="https://www.gla.ac.uk/schools/physics/staff/christinedavies/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Prof. Christine Davies
                  </a>
                  .
                </p>
                <p>
                  My PhD thesis, entitled "
                  <a href="https://theses.gla.ac.uk/8196/">
                    Properties of charmonium and bottomonium from lattice QCD
                    with very fine lattices
                  </a>
                  ", is available online, and I am a co-author on the following
                  high-energy physics papers:
                </p>
                <ul>
                  <li>
                    <a href="https://arxiv.org/abs/1411.1318">
                      Radial and orbital excitation energies of charmonium
                    </a>
                    , November 2014
                  </li>
                  <li>
                    <a href="https://arxiv.org/abs/1408.4169">
                      High-precision quark masses and QCD coupling from n_f=4
                      lattice QCD
                    </a>
                    , August 2014
                  </li>
                  <li>
                    <a href="https://arxiv.org/abs/1312.5874">
                      Bottomonium and B results from full lattice QCD
                    </a>
                    , December 2013
                  </li>
                </ul>
              </div>
              <span className="icon major style1 fa-graduation-cap" />
            </div>
          </section>

          <section id="contact" className="main special">
            <header className="major">
              <h2>Get In Touch</h2>
              <p>
                Got a project you'd like to talk about? Always happy to chat.
              </p>
            </header>
            <footer className="major">
              <ul className="actions">
                <li>
                  <a
                    href="mailto:contact@bengalloway.io"
                    className="button special"
                  >
                    Contact Ben
                  </a>
                </li>
              </ul>
            </footer>
          </section>
        </div>
      </Layout>
    );
  }
}

export default Index;

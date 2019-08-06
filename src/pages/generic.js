import React from "react";
import { Link } from "gatsby";
import Helmet from "react-helmet";
import Waypoint from "react-waypoint";

import Layout from "../components/layout";
import HeaderGeneric from "../components/HeaderGeneric";
import Nav from "../components/Nav";
import Scroll from "../components/Scroll";
import headshot from "../assets/images/headshot-400x400.jpg";

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
      <Layout>
        <Helmet title="Research | Dr. Ben Galloway" />

        <HeaderGeneric />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        />
        <Nav sticky={this.state.stickyNav} />

        <div id="main">
          <section id="intro" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>About Ben</h2>
                  <p>
                    As you may have noticed, this website is still under heavy
                    construction.
                  </p>
                </header>
                <p>Over the next few weeks it should be rapidly populated.</p>
                <ul className="actions">
                  <li>
                    <Link to="/" className="button">
                      There might be a button here. Who knows?
                    </Link>
                  </li>
                </ul>
              </div>
              <span className="image">
                <img src={headshot} alt="Ben's face, smiling, in monochrome" />
              </span>
            </div>
          </section>

          <section id="first" className="main special">
            <header className="major">
              <h2>Software and Science</h2>
            </header>
            <ul className="features">
              <li>
                <span className="icon major style1 fa-code" />
                <h3>Software</h3>
                <p>Here is some descriptional text.</p>
              </li>
              <li>
                <span className="icon major style3 fa-copy" />
                <h3>Science</h3>
                <p>Here is some descriptional text.</p>
              </li>
              <li>
                <span className="icon major style5 fa-diamond" />
                <h3>Communication</h3>
                <p>Here is some descriptional text.</p>
              </li>
            </ul>
            <footer className="major">
              <ul className="actions">
                <li>
                  <Link to="/" className="button">
                    Learn More
                  </Link>
                </li>
              </ul>
            </footer>
          </section>

          <section id="second" className="main special">
            <header className="major">
              <h2>Theatre and Communication</h2>
            </header>
            <ul className="statistics">
              <li className="style1">
                <span className="icon fa-code-fork" />
                <strong>5,120</strong> Fork
              </li>
              <li className="style2">
                <span className="icon fa-folder-open-o" />
                <strong>8,192</strong> Folder
              </li>
              <li className="style3">
                <span className="icon fa-signal" />
                <strong>2,048</strong> Signal
              </li>
              <li className="style4">
                <span className="icon fa-laptop" />
                <strong>4,096</strong> Laptop
              </li>
              <li className="style5">
                <span className="icon fa-diamond" />
                <strong>1,024</strong> Diamond
              </li>
            </ul>
            <p>
              All of the numbers in the above are meaningless. Well, at the
              moment at least!
            </p>
            <footer className="major">
              <ul className="actions">
                <li>
                  <Link to="/" className="button">
                    Learn More
                  </Link>
                </li>
              </ul>
            </footer>
          </section>

          <section id="cta" className="main special">
            <header className="major">
              <h2>Get In Touch</h2>
              <p>
                Got a project you'd like to talk about? Always happy to chat.
              </p>
            </header>
            <footer className="major">
              <ul className="actions">
                <li>
                  <Scroll type="id" element="footer">
                    <a href="/" className="button special">
                      Contact Ben
                    </a>
                  </Scroll>
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

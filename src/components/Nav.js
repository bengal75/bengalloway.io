import React from "react";
import Scrollspy from "react-scrollspy";
import Scroll from "./Scroll";

const Nav = props => (
  <nav id="nav" className={props.sticky ? "alt" : ""}>
    <Scrollspy
      items={["about", "software", "communication", "science", "contact"]}
      currentClassName="is-active"
      offset={-300}
    >
      <li>
        <Scroll type="id" element="about">
          <a href="/">About Me</a>
        </Scroll>
      </li>
      <li>
        <Scroll type="id" element="software">
          <a href="/">Software</a>
        </Scroll>
      </li>
      <li>
        <Scroll type="id" element="communication">
          <a href="/">Communication</a>
        </Scroll>
      </li>
      <li>
        <Scroll type="id" element="science">
          <a href="/">Science</a>
        </Scroll>
      </li>
      <li>
        <Scroll type="id" element="contact">
          <a href="/">Get In Touch</a>
        </Scroll>
      </li>
    </Scrollspy>
  </nav>
);

export default Nav;

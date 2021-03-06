import React from "react";

import headshot from "../assets/images/headshot-400x400.jpg";

const headshotStyle = {
  maxWidth: "200px",
  borderRadius: "50%",
};

const Header = props => (
  <header id="header" className="alt">
    <span className="logo">
      <img
        src={headshot}
        style={headshotStyle}
        alt="Ben's face, smiling, in monochrome"
      />
    </span>
    <h1>Dr. Ben Galloway</h1>
    <p>
      Full-stack web developer, science communicator, technical educator, and
      consultant
    </p>
  </header>
);

export default Header;

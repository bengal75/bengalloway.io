import React from "react";

import headshot from "../assets/images/headshot.jpg";

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
      Ben is a full-stack JavaScript software developer, science communicator,
      and technical writer and consultant.
    </p>
  </header>
);

export default Header;

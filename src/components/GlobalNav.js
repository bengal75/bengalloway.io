import React from "react";

const globalNavStyle = {
  borderRadius: "unset",
  borderBottomLeftRadius: "4px",
  borderBottomRightRadius: "4px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
};

const globalNavItemStyle = {
  listStyleType: "none",
  width: "20%",
  textAlign: "center",
};

const GlobalNav = props => (
  <nav id="globalnav" style={globalNavStyle}>
    <li style={globalNavItemStyle}>
      <a href="/">About Ben</a>
    </li>
    <li style={globalNavItemStyle}>
      <a href="/software">Software and Science</a>
    </li>
    <li style={globalNavItemStyle}>
      <a href="/comms">Theatre and Communication</a>
    </li>
    <li style={globalNavItemStyle}>
      <a href="/contact">Get In Touch</a>
    </li>
  </nav>
);

export default GlobalNav;

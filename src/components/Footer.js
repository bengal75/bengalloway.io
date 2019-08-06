import React from "react";

const Footer = props => (
  <footer id="footer">
    <section>
      <h2>Get In Touch</h2>
      <dl className="alt">
        <dt>Email</dt>
        <dd>
          <a href="mailto:hi@bengalloway.io">hi@bengalloway.io</a>
        </dd>
      </dl>
    </section>
    <section>
      <h2>Around the Web</h2>
      <ul className="icons">
        <li>
          <a
            href="https://github.com/bengal75"
            className="icon fa-github alt"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="label">GitHub</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/benagalloway/"
            className="icon fa-linkedin-square alt"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="label">LinkedIn</span>
          </a>
        </li>
      </ul>
    </section>
    <p className="copyright">
      &copy; Ben Galloway {new Date().getUTCFullYear()}. Based on a design by{" "}
      <a href="https://html5up.net">HTML5 UP</a>.
    </p>
  </footer>
);

export default Footer;

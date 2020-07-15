import React from "react";
import "../components/Footer.css";

class Footer extends React.Component {
  render() {
    return (
      <div id="contact" className="footer">
        <h1 className="footer-h">Let's work together!</h1>
        <p className="footer-p">How do you take your coffee?</p>
        <span role="img" aria-label="Close" className="footer-span">
          &#9749;
        </span>
        <a
          href="https://github.com/Nikola-afk"
          class="fa fa-github"
          target="_blank"
          rel="noreferrer noopener"
        >
          <p className="footer-p1">GitHub</p>
        </a>
        <hr className="footer-hr" />
        <p classname="footer-p2">
          Made with <span className="footer-span2">&hearts;</span> a keyboard
        </p>
      </div>
    );
  }
}
export default Footer;

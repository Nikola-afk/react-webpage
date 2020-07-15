import React from "react";
import "../components/NavBar.css";
import Logo from "../images/Logo.png";

class NavBar extends React.Component {
  render() {
    return (
      <nav id="navbar" className="sidebar">
        <ul className="nav-list">
          <li>
            <a className="active" href="#home">
              Home
            </a>
          </li>
          <li>
            <a href="#projects">My projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <hr className="hr-nav" />
        <h2>Nikola Topalovic</h2>
        <p className="nav-p1">From Serbia</p>
        <img src={Logo} alt="" className="logo" />
        <a
          href="https://twitter.com/afk_nikola"
          class="fa fa-twitter"
          target="_blank"
          rel="noreferrer noopener"
        ></a>
        <a
          href="https://www.reddit.com/user/Anastari"
          class="fa fa-reddit"
          target="_blank"
          rel="noreferrer noopener"
        ></a>
        <a
          href="https://www.linkedin.com/in/nikola-t-917981101/"
          class="fa fa-linkedin"
          target="_blank"
          rel="noreferrer noopener"
        ></a>
      </nav>
    );
  }
}
export default NavBar;

import React, { Component } from "react";

import { Link } from "react-router-dom";

class Nav extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <a className="navbar-brand" href="#">
          Website
        </a>
        <div>
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/form">
                Form
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/page3">
                Page 3
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/signin">
                Sign In
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Nav;

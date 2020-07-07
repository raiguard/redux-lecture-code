import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Header extends Component {
  render() {
    return (
      <div className="main-header">
        <p>Welcome, {this.props.user.name}</p>
        <nav>
          <Link className="nav-links" to="/">
            Home
          </Link>
          <Link className="nav-links" to="/profile">
            Profile
          </Link>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(Header);

import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Header extends Component {
  renderLinks() {
    if (this.props.authenticated) {
      return (
        <div>
          <Link to="/signout"> Sign out </Link> &nbsp; &nbsp; &nbsp;
          <Link to="/feature"> Feature </Link>
        </div>
      );
    } else {
      return (
        <div>
          <Link to="/signup"> Sign up </Link> &nbsp; &nbsp;&nbsp;
          <Link to="/signin"> Sign in </Link>
        </div>
      );
    }
  }

  render() {
    return (
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <Link to="/"> Authentication boilerplate </Link>
        {this.renderLinks()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps)(Header);

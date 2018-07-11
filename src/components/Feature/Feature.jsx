import React, { Component } from "react";
import requireAuth from '../requireAuth/requireAuth';

class Feature extends Component {
  render() {
    return <div> This is a protected feature </div>;
  }
}

export default requireAuth(Feature);

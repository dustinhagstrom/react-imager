import React, { Component } from "react";
import "./Display.css";

export class Display extends Component {
  render() {
    return (
      <div>
        <img
          id="one-pic"
          src={process.env.PUBLIC_URL + `images/timeless.jpeg`}
          alt="fish"
        />
      </div>
    );
  }
}

export default Display;

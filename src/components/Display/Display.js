import React, { Component } from "react";
import "./Display.css";

export class Display extends Component {
  render() {
    const { currentImage } = this.props;
    return (
      <div>
        <img
          className="one-pic"
          src={process.env.PUBLIC_URL + `images/${currentImage}`}
          alt="fish"
        />
      </div>
    );
  }
}

export default Display;

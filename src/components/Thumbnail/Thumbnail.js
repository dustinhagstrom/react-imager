import React, { Component } from "react";
import "./Thumbnail.css";

export class Thumbnail extends Component {
  render() {
    const { item } = this.props;
    return (
      <div className="display-class">
        <li>
          <img src={process.env.PUBLIC_URL + `images/${item}`} alt="fish" />
        </li>
      </div>
    );
  }
}

export default Thumbnail;

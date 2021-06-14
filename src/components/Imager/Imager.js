import React, { Component } from "react";

import "./Imager.css";

import Display from "../Display/Display";
import Thumbnail from "../Thumbnail/Thumbnail";

export class Imager extends Component {
  state = {
    imageArray: [
      "/bearGottaChill.jpeg",
      "/bearGottaEat.jpeg",
      "/casual.jpeg",
      "/cat.jpeg",
      "/determination.jpeg",
      "/expansive.jpeg",
      "/experienced.jpeg",
      "/fresh.jpeg",
      "/LarasWindow.jpeg",
      "/psycho.jpeg",
      "/timeless.jpeg",
      "/timeMachine.jpeg",
    ],
  };

  handleRandomPicture = () => {
    console.log("click");
  };
  handleForwardPicture = () => {
    console.log(this);
  };
  handleBackwardPicture = () => {
    console.log("click");
  };

  render() {
    return (
      <div className="imager-class">
        <Display />
        <div className="buttons">
          <button onClick={this.handleRandomPicture} id="random">
            Random
          </button>
          <button onClick={this.handleBackwardPicture} id="left">
            &lt;
          </button>
          <button onClick={this.handleForwardPicture} id="right">
            &gt;
          </button>
        </div>
        <ul className="grid">
          {this.state.imageArray.map((item, index) => {
            return <Thumbnail item={item} key={index} />;
          })}
        </ul>
      </div>
    );
  }
}

export default Imager;

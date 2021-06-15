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
    currentImage: "/bearGottaEat.jpeg",
    currentIndex: 1,
  };

  handleRandomPicture = () => {
    const myRando = Math.floor(Math.random() * 12);
    let randomPic = this.state.imageArray[myRando];
    this.setState({
      currentImage: randomPic,
      currentIndex: myRando,
    });
  };
  handleForwardPicture = () => {
    let newIndex = this.state.currentIndex + 1;
    if (newIndex > 11) {
      newIndex = 0;
    }
    let nextPic = this.state.imageArray[newIndex];
    this.setState({
      currentImage: nextPic,
      currentIndex: newIndex,
    });
  };
  handleBackwardPicture = () => {
    let newIndex = this.state.currentIndex - 1;
    if (newIndex < 0) {
      newIndex = 11;
    }
    let nextPic = this.state.imageArray[newIndex];
    this.setState({
      currentImage: nextPic,
      currentIndex: newIndex,
    });
  };

  handlesClickOnThumbnail = (item, key) => {
    let newIndex = key;
    let newPic = item;
    this.setState({
      currentImage: newPic,
      currentIndex: newIndex,
    });
  };

  render() {
    const { imageArray, currentImage, currentIndex } = this.state;
    return (
      <div className="imager-class">
        <h1>Imager</h1>
        <Display
          array={imageArray}
          currentImage={currentImage}
          index={currentIndex}
        />
        <div className="buttons">
          <button onClick={this.handleRandomPicture} id="random">
            Random
          </button>
          <div className="left-or-right">
            <button onClick={this.handleBackwardPicture} id="left">
              &lt;
            </button>
            <button onClick={this.handleForwardPicture} id="right">
              &gt;
            </button>
          </div>
        </div>
        <ul className="grid">
          {this.state.imageArray.map((item, index) => {
            return (
              <Thumbnail
                item={item}
                index={index}
                key={index}
                handlesClickOnThumbnail={this.handlesClickOnThumbnail}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Imager;

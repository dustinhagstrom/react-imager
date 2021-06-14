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
    console.log("click");
    const myRando = Math.floor(Math.random() * 12);
    console.log(myRando);
    let randomPic = this.state.imageArray[myRando];
    this.setState({
      currentImage: randomPic,
      currentIndex: myRando,
    });

    //generate random number 0-11 and apply that number to the image at that index of image array.
  };
  handleForwardPicture = () => {
    console.log("click");
    let newIndex = this.state.currentIndex + 1;
    if (newIndex > 11) {
      newIndex = 0;
    }
    let nextPic = this.state.imageArray[newIndex];
    this.setState({
      currentImage: nextPic,
      currentIndex: newIndex,
    });

    //add one to the index of current image in display and then display photo corresponding to that index
  };
  handleBackwardPicture = () => {
    console.log("click");
    console.log("click");
    let newIndex = this.state.currentIndex - 1;
    if (newIndex < 0) {
      newIndex = 11;
    }
    let nextPic = this.state.imageArray[newIndex];
    this.setState({
      currentImage: nextPic,
      currentIndex: newIndex,
    });
    //subtract one from the index of the current image in display and then display photo corresponding to that index
  };

  render() {
    const { imageArray } = this.state.imageArray;
    const { currentImage } = this.state.currentImage; //why this destructure isn't working??
    return (
      <div className="imager-class">
        <Display
          array={imageArray}
          currentImage={this.state.currentImage}
          index={this.state.currentIndex}
        />
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

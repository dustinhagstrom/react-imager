import React, { Component } from "react";
import "./Thumbnail.css";

export class Thumbnail extends Component {
  state = {
    thisPic: "",
  };

  // handlesClickOnThumbnail = () => {
  //   console.log("click");
  //   let thumbnailImage = this.props.item;
  //   this.props.handlePutThumbnailPictureInDisplay(thumbnailImage);
  // };

  render() {
    const { item, handlesClickOnThumbnail, index } = this.props;
    return (
      <div className="display-class">
        <li>
          <img
            src={process.env.PUBLIC_URL + `images/${item}`}
            alt="fish"
            onClick={() => {
              handlesClickOnThumbnail(item, index);
            }}
          />
        </li>
      </div>
    );
  }
}

export default Thumbnail;

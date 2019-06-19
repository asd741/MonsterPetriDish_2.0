import React, { Component } from "react";
import { FaYoutube } from "react-icons/fa";
import { FaVolumeUp } from "react-icons/fa";

export default class Mobi extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <h1 id="mobi-page-h1">魔物培養皿官方網站</h1>
        <div id="logo">
          <img src={require("../../images/logo.png")} />
        </div>
        <div
          id="video-btn"
          onClick={() => {
            this.props.handlePopup(true);
          }}
        >
          <FaYoutube />
        </div>
        <div
          id="music-btn"
          onClick={() => {
            this.props.handleMusic(!this.props.music);
          }}
        >
          <FaVolumeUp />
        </div>
        {this.props.showPopup === true ? (
          <div className="popup">
            <div className="mask">
              <div className="authbox">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/-cF4cxzY-VE"
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                />
              </div>
            </div>
          </div>
        ) : null}
      </>
    );
  }
}

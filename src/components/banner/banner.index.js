import React, { Component } from "react";
import Mobi from "./banner.mobi";
import Pc from "./banner.pc";
import "./banner.css";
import QueueAnim from "rc-queue-anim";
import { throws } from "assert";
export default class Banner extends Component {
  constructor(props) {
    super(props);
    if (typeof window !== "undefined") {
      let pageType = window.innerWidth > 1140 ? "pc" : "mobi";
      this.state = {
        page: pageType
      };
      window.onresize = () => {
        if (window.innerWidth > 1140 && this.state.page !== "pc") {
          this.setState({ page: "pc" });
        }
        if (window.innerWidth < 1140 && this.state.page !== "mobi") {
          this.setState({ page: "mobi" });
        }
      };
    }
    this.handlePopup = this.handlePopup.bind(this);
  }
  componentDidMount() {
    this.setState({
      showPopup: false
    });
  }
  handlePopup(bool) {
    this.setState({ showPopup: bool });
  }
  render() {
    return (
      <div
        id="banner-page"
        onClick={e => {
          e = e || window.event;
          if (e.target !== "img" && this.state.showPopup === true) {
            this.handlePopup(false);
          }
        }}
      >
        <QueueAnim animConfig={{ opacity: [1, 0] }}>
          {this.state && this.state.page === "pc" ? (
            <div className="page-wrapper" key={"bannerPc"}>
              <Pc
                showPopup={this.state.showPopup}
                handlePopup={this.handlePopup}
              />
            </div>
          ) : (
            <div className="page-wrapper" key={"bannerMobi"}>
              <Mobi
                showPopup={this.state.showPopup}
                handlePopup={this.handlePopup}
              />
            </div>
          )}
        </QueueAnim>
      </div>
    );
  }
}

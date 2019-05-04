import React, { Component } from "react";
import Mobi from "./banner.mobi";
import Pc from "./banner.pc";
import "./banner.css";
import QueueAnim from "rc-queue-anim";
export default class Banner extends Component {
  constructor(props) {
    super(props);
    if (typeof window !== 'undefined') {
      this.state = {
        page: window.innerWidth > 1140 ? "pc" : "mobi"
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
  }

  render() {
    return (
      <div id='banner-page'>
        <QueueAnim animConfig={{ opacity: [1, 0] }}>
          {this.state && this.state.page === "pc" ?
            <div className='page-wrapper' key={'bannerPc'} ><Pc /></div> :
            <div className='page-wrapper' key={'bannerMobi'}><Mobi /></div>}
        </QueueAnim>
      </div >
    )
  }
}

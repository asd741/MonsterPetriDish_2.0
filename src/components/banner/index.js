import React, { Component } from "react";
import Mobi from "./mobi";
import Pc from "./pc";
import "./style.css";
export default class Banner extends Component {
  constructor(props) {
    super(props);
    if (typeof window!=='undefined') {
      this.state = {
        page: window.innerWidth > 1200 ? "pc" : "mobi"
      };
      window.onresize = () => {
        if (window.innerWidth > 1200 && this.state.page !== "pc") {
          this.setState({ page: "pc" });
        }
        if (window.innerWidth < 1200 && this.state.page !== "mobi") {
          this.setState({ page: "mobi" });
        }
      };
    }
  }
  componentWillUnmount() {
    console.log("離開了banner");
  }
  render() {
    return <div>{this.state&&this.state.page === "pc" ? <Pc /> : <Mobi />}</div>;
  }
}

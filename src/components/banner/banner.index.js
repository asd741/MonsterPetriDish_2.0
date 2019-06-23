import React, { Component } from "react";
import Mobi from "./banner.mobi";
import Pc from "./banner.pc";
import "./banner.css";
import QueueAnim from "rc-queue-anim";
// import { throws } from "assert";
import bgm from '../../images/music.mp3';
export default class Banner extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    if (typeof window !== "undefined") {
      let pageType = window.innerWidth > 1140 ? "pc" : "mobi";
      let haveBgmObj=window.bgmObj?true:false;
      this.state = {
        page: pageType,
        createMusic:haveBgmObj
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
    this.handleMusic = this.handleMusic.bind(this);
  }
  componentDidMount() {
    if(this.state.createMusic===false){
      window.bgmObj=new Audio(bgm);
    }
    this.setState({
      showPopup: false,
      music:false,
    });
  }
  handlePopup(bool) {
    this.setState({ showPopup: bool });
  }
  handleMusic(bool){
    if(window.bgmObj){
      if(bool===true){
        window.bgmObj.play();
        this.setState({ music:true });
        return;
      }
      if(bool===false){
        window.bgmObj.pause();
        this.setState({ music:false });
        return;
      }
    }else{
      console.log('音樂物件不存在');
    }
    
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
                handleMusic={this.handleMusic}
                music={this.state.music}
              />
            </div>
          ) : (
            <div className="page-wrapper" key={"bannerMobi"}>
              <Mobi
                showPopup={this.state.showPopup}
                handlePopup={this.handlePopup}
                handleMusic={this.handleMusic}
                music={this.state.music}
              />
            </div>
          )}
        </QueueAnim>
      </div>
    );
  }
}

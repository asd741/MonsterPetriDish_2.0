import React, { Component } from "react";
import QueueAnim from "rc-queue-anim";

export default class Mobi extends Component {
  render() {
    return (
      <QueueAnim animConfig={{ opacity: [1, 0], translateY: [0, 50] }} className='page-wrapper'>
        <h1 id='mobi-page-h1'>魔物培養皿官方網站</h1>
        <img id='logo' key='mobi-logo' src={require('../../images/logo.png')}></img>
      </QueueAnim>
    );
  }
}

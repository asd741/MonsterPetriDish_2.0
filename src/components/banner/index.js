import React, { Component } from 'react';
import Mobi from './mobi';
import Pc from './pc';
export default class Banner extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div>
        {this.props.windowSize>1024?<Pc/>:<Mobi/>}
      </div>
    );
  }
}


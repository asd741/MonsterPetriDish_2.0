import React, { Component } from 'react';
import { Link } from "gatsby";
import "./normalize.css";
import "./style.css";

export default class Mobi extends Component {

    render() {
        return (
            <div style={{ "position": "relative", 'height': '100vh' }}>
                <h1 style={{}}>魔物培養皿官方網站</h1>
                <Link to='/story ' className='link'>回到故事</Link>
            </div>
        );
    }
}



import React, { Component } from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
// import { Provider } from "react-redux";
// import { createStore } from "redux";
// import { reducers } from "../redux/reducers";
import { Link } from "gatsby";
import QueueAnim from "rc-queue-anim";
// import axios from "axios";
import "./layout.sass";
import { Helmet } from "react-helmet";
// let store = createStore(reducers);
const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => {
      return (
        // <Provider>
          <div className='bg'>
            <Helmet>
              <meta charSet="utf-8" />
              <title>魔物培養皿官網</title>
            </Helmet>
            <QueueAnim type="scale">
              <div
                className="page-wrapper"
                key={typeof window != "undefined" && window.location.href}
              >
                {children}
              </div>
            </QueueAnim>
            <nav className="navbar">
              <Link to="/" className="index-link">
                大廳
              </Link>
              <Link to="/story" className="story-link">
                故事
              </Link>
              <Link to="/role" className="role-link">
                角色
              </Link>
              <Link to="/download" className="download-link">
                下載
              </Link>
            </nav>
          </div>
        // </Provider>
      );
    }}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};
export default Layout;

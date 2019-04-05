import React, { Component } from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { reducers } from "../redux/reducers";
import { Link } from "gatsby";
import QueueAnim from 'rc-queue-anim';
import "./layout.sass";
let store = createStore(reducers);
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
        <Provider store={store}>
          <>
            <QueueAnim type='scale'>{children}</QueueAnim>
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
          </>
        </Provider>
      );
    }}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};
export default Layout;

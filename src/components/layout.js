import React, { Component } from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import { Link } from "gatsby";
import QueueAnim from "rc-queue-anim";
import "./layout.sass";
import { Helmet } from "react-helmet";
// import { Provider } from "react-redux";
// import { createStore } from "redux";
// export function reducer(state = 0, action) {
//   switch (action.type) {
//     case "add":
//       return state + 1;
//     default:
//       return 100;
//   }
// }
// const store = createStore(reducer);
// document.documentElement.onclick = () => {
//   console.log("click");

//   store.dispatch({ type: "add" });
//   console.log(store.getState());
// };
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
        <div className="bg">
          <Helmet>
            <meta charSet="utf-8" />
            <title>魔物培養皿官網</title>
          </Helmet>
          {/* <Provider store={store}> */}
            <QueueAnim type="scale">
              <div
                className="page-wrapper"
                key={typeof window != "undefined" && window.location.href}
              >
                {children}
                {/* {React.Children.map(children, child =>
                  React.cloneElement(child, { reducer: reducer })
                )} */}
              </div>
            </QueueAnim>
          {/* </Provider> */}
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
            {/* <Link to="/other" className="other-link">
              彩蛋
            </Link> */}
          </nav>
        </div>
      );
    }}
  />
);
// store.subscribe(Layout);

// Layout.propTypes = {
//   children: PropTypes.node.isRequired
// };
export default Layout;

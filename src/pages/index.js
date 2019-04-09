import React, { Component } from "react";
import Banner from "../components/banner/banner.index";
import Layout from "../components/layout";

export default class IndexPage extends Component {
  render() {
    return (
      <Layout>
        <Banner/>
      </Layout>
    );
  }
}

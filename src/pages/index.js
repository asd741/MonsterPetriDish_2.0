import React, { Component } from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Banner from '../components/banner'

export default class IndexPage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <Layout>
          <Banner/>
        </Layout>
      </>
    );
  }
}


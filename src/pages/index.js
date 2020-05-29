import React from "react";
import Layout from "../layout/Layout";
import { Helmet } from "react-helmet";

const IndexPage = () => (
    <>
    <Helmet>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <title>Code for Heaven</title>
      <link rel="canonical" href="http://codeforheaven.com/" />
    </Helmet>
    <Layout atHome >
    </Layout>
    </>
  );

export default IndexPage;
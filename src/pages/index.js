import React from "react";
import Layout from "../layout/Layout";
import { Helmet } from "react-helmet";
import RegularSection from '../layout/RegularSection';
import {LinkAsButton} from '../elements/Buttons';
import Logo from '../components/Logo';
import Cloud from '../components/Cloud';
import cloudSrc from '../components/code-for-heaven-cloud.png';

const IndexPage = () => (
    <>
    <Helmet>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <title>Code for Heaven</title>
      <link rel="canonical" href="http://codeforheaven.com/" />
    </Helmet>
    <Layout atHome={true}>
      <RegularSection>
              <Logo className="atHome" />
              <LinkAsButton className="atHome" to="/blog">Blog</LinkAsButton>
      </RegularSection>
      <Cloud src={cloudSrc} />
    </Layout>
    </>
  );

export default IndexPage;
import React from 'react';
import Layout from '../style/organisms/Layout';
import RegularSection from '../style/organisms/RegularSection';
import MyHelmet from '../style/components/MyHelmet';
import { graphql, Link } from 'gatsby';

const NothingFound = ({ data }) => {
  const myHelmetData = {
    description: 'Front-end Creator on his way to UX.',
    facebookThumbnail: data.file.childImageSharp.fixed.src,
    title: 'UX & Front end',
  };

  return (
    <>
      <MyHelmet data={myHelmetData} />

      <Layout>
        <RegularSection>
          <h1>404 - Nothing's here!</h1>
          <Link to="/">Go back to homepage</Link>
        </RegularSection>
      </Layout>
    </>
  );
};

export const query = graphql`
  {
    file(name: { eq: "fbThumb-404" }) {
      childImageSharp {
        fixed(width: 1200, height: 628) {
          src
        }
      }
    }
  }
`;

export default NothingFound;

import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import { boxPadding } from '../atoms/Box';
import { H1 } from '../atoms/Headings';
import { RegularSection } from '../organisms/Sections';

const BioStyles = styled.div`
  background-color: #fafafa;
  margin-bottom: 6rem;
`;

const Img = styled(Image)`
  grid-area: picture;
  border-radius: 50%;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1.3rem;

  grid-template-areas:
    'picture . .'
    'picture title title'
    'picture text text'
    'picture . .';
  align-items: center;

  ${boxPadding};
  padding-top: 3rem;
  padding-bottom: 3rem;

  h1,
  p {
    margin-top: 0;
    padding-left: 1rem;
  }

  h1 {
    grid-area: title;
  }

  p {
    grid-area: text;
  }

  ${({ theme }) => theme.media.phone} {
    grid-template-columns: 0.5fr repeat(4, 1fr) 0.5fr;
    grid-template-rows: minmax(60px, auto) minmax(70px, auto) minmax(80px, auto) 1rem minmax(
        25px,
        auto
      );
    grid-template-areas:
      '. picture breadcrumb breadcrumb . .'
      '. name name name name .'
      '. description description description description .'
      '. . . . . .'
      'links links links links links links';
    h1,
    p {
      padding-left: 0;
    }
  }
`;

const Bio = () => {
  const { myProfilePhoto } = useStaticQuery(
    graphql`
      query {
        myProfilePhoto: file(name: { eq: "myProfilePhoto" }) {
          childImageSharp {
            fixed(width: 250) {
              ...GatsbyImageSharpFixed_withWebp
            }
          }
        }
      }
    `
  );

  return (
    <BioStyles>
      <RegularSection>
        <Container>
          <H1>Hi, I'm Mateusz</H1>
          <p>
            I work as a UX Designer in a leading ticketing company and help a
            group of UX novices get into business.
          </p>
          <Img fixed={myProfilePhoto.childImageSharp.fixed} />
        </Container>
      </RegularSection>
    </BioStyles>
  );
};

export default Bio;

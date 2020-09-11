import React from "react"
import styled from "styled-components"
import { H3 } from "../atoms/Headings"

import LinkedInLogo from "./LI-logo.png"
import TwitterLogo from "./Twitter-logo.png"

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;

    H3 {
      margin-top: 1.6em;
      width: 100%;
    }
`;

const LinkedInLink = styled.a`
    background-image: url(${LinkedInLogo});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: left top;
    font-size: 0.01px;
    width: 40px;
    height: 40px;
    margin: 8px 16px 8px 0;

    transition: transform ease-in-out .3s;
    &:hover {
      transform: scale(1.1)
    }
`;

const TwitterLink = styled.a`
    background-image: url(${TwitterLogo});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: left top;
    font-size: 0.01px;
    width: 40px;
    height: 40px;
    margin: 8px 16px 8px 0;

    transition: transform ease-in-out .3s;
    &:hover {
      transform: scale(1.1)
    }
`;

const Contact = () => (
    <Wrapper>
      <H3>Enjoyed it? Great! Let's stay in touch.</H3>
      <LinkedInLink href="//www.linkedin.com/in/mateusz-w-kozlowski/" >LinkedIn</LinkedInLink>
      <TwitterLink href="//twitter.com/mtKozlowski" >Twitter</TwitterLink>
    </Wrapper>
  )

  export default Contact;
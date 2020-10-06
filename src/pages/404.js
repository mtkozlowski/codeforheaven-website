import React from "react"
import Layout from "../style/organisms/Layout"
import RegularSection from "../style/organisms/RegularSection"
import MyHelmet from "../style/components/MyHelmet"
import facebookThumbnail from "./404/404-facebookThumbnail.jpg"
import { Link } from "gatsby"

const NothingFound = () => {
  const myHelmetData = {
    description: "Front-end Creator on his way to UX.",
    facebookThumbnail,
    title: "UX & Front end",
  }

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
  )
}

export default NothingFound

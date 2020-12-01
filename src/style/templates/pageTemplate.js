import React from "react"
import { graphql } from "gatsby"

import Layout from "../organisms/Layout"
import RegularSection from "../organisms/RegularSection"
import { H2 } from "../atoms/Headings"

export default function Template({ data }) {
  const { title } = data.datoCmsPage
  return (
    <>
      <Layout>
        <RegularSection>
          <H2>Whatsupp: {title}</H2>
        </RegularSection>
      </Layout>
    </>
  )
}
export const pageQuery = graphql`
  query pageQuery($id: String) {
    datoCmsPage(id: { eq: $id }) {
      id
      title
    }
  }
`

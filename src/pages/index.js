import React from "react"
import CaseStudies from "../components/CaseStudies"
import Header from "../components/Header"
import { WhatSection } from "../components/Sections"
import { graphql } from "gatsby"
import Layout from "../components/Layout"

export const pageQuery = graphql`
  query HomePage {
    caseStudies: allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            summary
            field
            image {
              childImageSharp {
                resize(width: 500, height: 500) {
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`

const IndexPage = props => {
  const cases = props.data.caseStudies.edges.map(edge => edge.node.frontmatter)
  console.log(cases)
  return (
    <Layout>
      {/* <SEO title="Home" /> */}
      <Header />
      <WhatSection />
      <CaseStudies cases={cases} />
    </Layout>
  )
}

export default IndexPage

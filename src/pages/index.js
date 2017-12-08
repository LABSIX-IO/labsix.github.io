import React from 'react'

import Header from 'components/Header'
import { WhatSection, WhySection } from 'components/Sections'
import CaseStudies from 'components/CaseStudies'

const IndexPage = (props) => {
  const cases = props.data.caseStudies.edges.map(edge => edge.node.frontmatter)
  console.log(cases);
  return (
    <div>
      <Header />
      <WhatSection />
      <WhySection />
      <CaseStudies cases={cases} />
    </div>
  )
}

export default IndexPage

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

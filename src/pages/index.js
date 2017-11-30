import React from 'react'

import Header from 'components/Header'
import { WhatSection, WhySection } from 'components/Sections'
import CaseStudies from 'components/CaseStudies'

const IndexPage = () => (
  <div>
    <Header />
    <WhatSection />
    <WhySection />
    <CaseStudies />
  </div>
)

export default IndexPage

import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import StyledHeroSection from "../components/HeroSection"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <StyledHeroSection />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}></div>
  </Layout>
)

export default IndexPage

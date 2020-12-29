import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import HeroSection from "../components/HomeComponents/HeroSection"
import FeatureSection from "../components/HomeComponents/FeatureSection"
import CallToAction from "../components/HomeComponents/CallToAction"
import BlogSection from "../components/HomeComponents/BlogSection"

const HomePage = () => (
  <Layout currentPage="home">
    <SEO title="Home" description="Welcome to Catto Joy" />

    <main className="HomePage">
      <HeroSection />
      <FeatureSection />
      <CallToAction />
      <BlogSection />
    </main>
  </Layout>
)

export default HomePage

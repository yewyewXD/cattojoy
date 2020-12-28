import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import HeroSection from "../components/Home/HeroSection"
import FeatureSection from "../components/Home/FeatureSection"
import CallToAction from "../components/Home/CallToAction"
import BlogSection from "../components/Home/BlogSection"

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

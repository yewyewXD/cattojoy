import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import HeroSection from "../components/Home/HeroSection"
import FeatureSection from "../components/Home/FeatureSection"
import CallToAction from "../components/CallToAction"
import BlogSection from "../components/Home/BlogSection"

const HomePage = () => (
  <Layout>
    <SEO title="Home" description="Welcome to Catto Joy" />
    <HeroSection />
    <FeatureSection />
    <CallToAction />
    <BlogSection />
  </Layout>
)

export default HomePage

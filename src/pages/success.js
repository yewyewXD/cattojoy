import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const SuccessPage = () => (
  <Layout currentPage="home">
    <SEO title="Success Page" description="Welcome to Catto Joy" />
    <main className="SuccessPage">success page</main>
  </Layout>
)

export default SuccessPage

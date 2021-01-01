import React from "react"

import Layout from "../components/Layout"
import PageBanner from "../components/ReusableComponents/PageBanner"
import SEO from "../components/seo"

const ShopPage = () => {
  return (
    <Layout currentPage="shop">
      <PageBanner
        description="Shopping Shopping Shopping Shopping Shopping Shopping Shopping Shopping Shopping"
        title="Shopping Page"
      />
      <SEO title="Catto Joy Shop" />
      <div className="ShopPage">hi</div>
    </Layout>
  )
}

export default ShopPage

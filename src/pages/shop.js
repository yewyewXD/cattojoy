import React from "react"

import Layout from "../components/Layout"
import PageBanner from "../components/ReusableComponents/PageBanner"
import SEO from "../components/seo"
import ProductsSection from "../components/ShopComponents/ProductsSection"

const ShopPage = () => {
  return (
    <Layout currentPage="shop">
      <SEO title="Shop" />

      <main className="ShopPage">
        {/* banner */}
        <PageBanner
          description="Here you can find all the cat toys we are selling."
          title="Products"
        />

        {/* content */}
        <div className="container mt-5">
          {/* view switcher */}
          <div className="all-center justify-content-between mb-4">
            <div>view switcher</div>
            <div>sorting </div>
          </div>

          <ProductsSection />
        </div>
      </main>
    </Layout>
  )
}

export default ShopPage

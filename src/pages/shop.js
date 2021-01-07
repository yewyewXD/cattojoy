/* eslint-disable */
import React, { useState } from "react"

import Layout from "../components/Layout"
import PageBanner from "../components/ReusableComponents/PageBanner"
import SEO from "../components/seo"
import ProductsSection from "../components/ShopComponents/ProductsSection"

const ShopPage = () => {
  const [filterOption, setFilterOption] = useState("dateASC")

  function handleTriggerFilter(e) {
    setFilterOption(e.target.value)
  }

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
            <div>sorting v</div>
            <select
              className="form-control"
              defaultValue="dateASC"
              onChange={handleTriggerFilter}
            >
              <option value="dateASC">Default sorting</option>
              <option value="alphaASC">A-Z</option>
              <option value="alphaDESC">Z-A</option>
              <option value="priceASC">Price, low to high</option>
              <option value="priceDESC">Price, high to low</option>
              <option value="dateASC">New to old</option>
              <option value="dateDESC">Old to new</option>
            </select>
          </div>

          <ProductsSection filterOption={filterOption} />
        </div>
      </main>
    </Layout>
  )
}

export default ShopPage

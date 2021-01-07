/* eslint-disable */
import React, { useState } from "react"

import Layout from "../components/Layout"
import PageBanner from "../components/ReusableComponents/PageBanner"
import SEO from "../components/seo"
import ProductsSection from "../components/ShopComponents/ProductsSection"

const ShopPage = () => {
  const [filterOption, setFilterOption] = useState("dateASC")
  const [selectedViewType, setSelectedViewType] = useState("grid")

  function handleTriggerFilter(e) {
    setFilterOption(e.target.value)
  }

  function handleSwitchView(e) {
    setSelectedViewType(e.target.value)
  }

  const viewTypes = ["grid", "list"]

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
          <div className="all-center mb-4">
            {/* view switcher  */}
            <div className="w-50 d-md-block d-none">
              {viewTypes.map(viewType => (
                <label className="ViewSwitcher | mr-3" key={viewType}>
                  <input
                    className="ViewSwitcher__Button"
                    type="radio"
                    name="viewSwitcher"
                    value={viewType}
                    checked={selectedViewType === viewType}
                    onChange={handleSwitchView}
                  />
                  <span className="ViewSwitcher__Text">{viewType}</span>
                </label>
              ))}
            </div>

            {/* sort */}
            <select
              className="form-control w-50 ml-auto"
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

          <ProductsSection
            filterOption={filterOption}
            viewType={selectedViewType}
          />
        </div>
      </main>
    </Layout>
  )
}

export default ShopPage

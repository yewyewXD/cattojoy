import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import PageBanner from "../components/ReusableComponents/PageBanner"
import ShoppingCart from "../components/CartComponents/ShoppingCart"

const CartPage = () => {
  return (
    <Layout currentPage="cart">
      <SEO title="My Cart" />
      <main className="CartPage">
        <PageBanner
          title="My Shopping Cart"
          description="This page will display all the items that you have added to your shopping cart"
        />

        <div className="container my-5 py-4">
          {/* title */}
          <div className="mediumSize heading mb-4">Shopping Cart</div>

          {/* categories */}
          <div className="row bg-light py-2 mb-3 border-bottom">
            <div className="col-lg-3 col-md-4 col-sm-5">Image</div>
            <div className="col-lg-7 col-md-8 col-sm-7">Product</div>
            <div className="col-2 d-lg-block d-none">Total</div>
          </div>

          {/* shopping cart */}
          <ShoppingCart />
        </div>
      </main>
    </Layout>
  )
}

export default CartPage

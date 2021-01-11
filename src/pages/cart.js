import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const CartPage = () => {
  return (
    <Layout currentPage="cart">
      <SEO title="My Cart" />
      <main className="CartPage">
        <div className="container">testing</div>
      </main>
    </Layout>
  )
}

export default CartPage

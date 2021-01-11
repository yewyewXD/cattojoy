import React, { useContext } from "react"
import { CartContext } from "../context/CartContext/CartState"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const CartPage = () => {
  const { productCount } = useContext(CartContext)

  return (
    <Layout currentPage="cart">
      <SEO title="My Cart" />
      <main className="CartPage">
        <div className="container">testing {productCount}</div>
      </main>
    </Layout>
  )
}

export default CartPage

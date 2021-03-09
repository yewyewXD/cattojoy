import React, { useContext } from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import PageBanner from "../components/ReusableComponents/PageBanner"
import ShoppingCart from "../components/CartComponents/ShoppingCart"
import CheckoutSection from "../components/CartComponents/CheckoutSection"
import { CartContext } from "../context/CartContext/CartState"
import { graphql, useStaticQuery } from "gatsby"

const CartPage = () => {
  const { products } = useContext(CartContext)
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "CartImages/catInBasket1.png" }) {
        image: childImageSharp {
          fixed(quality: 50, width: 200) {
            src
          }
        }
      }
    }
  `)

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
          <h3 className="heading mb-4">Shopping Cart</h3>

          {/* categories */}
          <div className="px-3">
            <div className="row bgLight py-2 mb-3 border-bottom d-sm-flex d-none">
              <div className="col-lg-3 col-md-4 col-sm-5">Image</div>
              <div className="col-lg-7 col-md-8 col-sm-7">Product</div>
              <div className="col-2 d-lg-block d-none">Total</div>
            </div>
          </div>

          {products.length === 0 && (
            <div className="all-center-column py-3">
              <img
                src={data.file.image.fixed.src}
                alt="Shopping Basket Cat by Denis Sazhin from the Noun Project"
              />
              <div>Cart is empty.</div>
            </div>
          )}

          {/* shopping cart */}
          <ShoppingCart />

          {/* checkout */}
          <CheckoutSection />
        </div>
      </main>
    </Layout>
  )
}

export default CartPage

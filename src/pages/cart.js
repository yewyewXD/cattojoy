import React, { useContext } from "react"
import { CartContext } from "../context/CartContext/CartState"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import PageBanner from "../components/ReusableComponents/PageBanner"

const CartPage = () => {
  const { products, increaseProductCount, decreaseProductCount } = useContext(
    CartContext
  )

  console.log(products)

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
          <div className="mediumSize heading mb-4">Shopping Card</div>

          {/* categories */}
          <div className="row bg-light py-2 mb-3 border-bottom">
            <div className="col-sm-2 col-3">Image</div>
            <div className="col-sm-8 col-9">Product</div>
            <div className="col-2 d-sm-block d-none">Total</div>
          </div>

          {/* shopping cart */}
          {products.length > 0 &&
            products.map(product => (
              <div className="row" style={{ height: "250px" }} key={product.id}>
                <div className="col-sm-2 col-3">
                  <div
                    className="w-100 h-100"
                    style={{
                      backgroundImage: `url(${product.previewImage.fluid.src})`,
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  ></div>
                </div>

                <div className="col-sm-8 col-9">
                  <div>{product.title}</div>

                  <div>{product.description.childMarkdownRemark.excerpt}</div>

                  <div>{product.price}</div>

                  <div className="d-flex bg-light">
                    <span
                      role="button"
                      onClick={() => {
                        decreaseProductCount(product)
                      }}
                    >
                      -
                    </span>
                    <span className="mx-3">{product.count}</span>
                    <span
                      role="button"
                      onClick={() => {
                        increaseProductCount(product)
                      }}
                    >
                      +
                    </span>
                  </div>
                </div>
                <div className="col-2 d-sm-block d-none">
                  RM{+product.count * +product.price}
                </div>
              </div>
            ))}
        </div>
      </main>
    </Layout>
  )
}

export default CartPage

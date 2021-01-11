import React, { useContext } from "react"
import { CartContext } from "../context/CartContext/CartState"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import PageBanner from "../components/ReusableComponents/PageBanner"

const CartPage = () => {
  const { products, increaseProductCount, decreaseProductCount } = useContext(
    CartContext
  )

  function handleRoundPrice(price) {
    if (price % 1 !== 0) {
      // if price has decimals
      const decimalCount = price.toString().split(".")[1].length
      if (decimalCount > 2) {
        return (Math.round(price * 100) / 100).toFixed(2)
      } else if (decimalCount === 1) {
        return price + "0"
      } else {
        return price
      }
    } else {
      // if price does not have decimals
      return price + "00"
    }
  }

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
            <div className="col-lg-3 col-md-4 col-sm-5">Image</div>
            <div className="col-lg-7 col-md-8 col-sm-7">Product</div>
            <div className="col-2 d-lg-block d-none">Total</div>
          </div>

          {/* shopping cart */}
          {products.length > 0 &&
            products.map(product => (
              <div className="row mb-5" key={product.id}>
                {/* product image */}
                <div
                  className="col-lg-3 col-md-4 col-sm-5"
                  style={{ height: "250px" }}
                >
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

                {/* product details */}
                <div className="col-lg-7 col-md-8 col-sm-7">
                  <div>{product.title}</div>

                  <div>{product.description.childMarkdownRemark.excerpt}</div>

                  <div>{product.price}</div>

                  <div className="d-flex bg-light">
                    <button
                      onClick={() => {
                        decreaseProductCount(product)
                      }}
                    >
                      -
                    </button>
                    <span className="mx-3">{product.count}</span>
                    <button
                      onClick={() => {
                        increaseProductCount(product)
                      }}
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* price total price */}
                <div className="col-2 d-lg-block d-none">
                  {handleRoundPrice(+product.count * +product.price)}
                </div>
              </div>
            ))}
        </div>
      </main>
    </Layout>
  )
}

export default CartPage

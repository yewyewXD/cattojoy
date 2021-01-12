/* eslint-disable */
import React, { useContext } from "react"
import { CartContext } from "../../context/CartContext/CartState"

const ShoppingCart = () => {
  const {
    products,
    increaseProductCount,
    decreaseProductCount,
    removeProduct,
  } = useContext(CartContext)

  console.log("cart products:", products)

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

  return (
    <div className="ShoppingCart">
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
              <div className="ProductTitle">{product.title}</div>

              <div>{product.description.childMarkdownRemark.excerpt}</div>

              <div className="ProductPrice | d-lg-block d-none">
                RM{product.price}
              </div>

              <div className="ProductPrice | d-lg-none d-block">
                RM{handleRoundPrice(+product.count * +product.price)}
              </div>

              <div className="d-flex align-items-center">
                <div className="ProductCounter | all-center mr-3">
                  <button
                    className="ProductCounter__Button | btn all-center p-0"
                    onClick={() => {
                      decreaseProductCount(product)
                    }}
                  >
                    -
                  </button>
                  <span className="mx-3">{product.count}</span>
                  <button
                    className="ProductCounter__Button | btn all-center p-0"
                    onClick={() => {
                      increaseProductCount(product)
                    }}
                  >
                    +
                  </button>
                </div>

                <div
                  className="RemoveButton | text-danger"
                  role="button"
                  onClick={() => {
                    removeProduct(product)
                  }}
                >
                  REMOVE
                </div>
              </div>
            </div>

            {/* price total price */}
            <div className="col-2 d-lg-block d-none">
              RM{handleRoundPrice(+product.count * +product.price)}
            </div>
          </div>
        ))}
    </div>
  )
}

export default ShoppingCart

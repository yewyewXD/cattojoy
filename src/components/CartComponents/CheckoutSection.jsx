import React, { useContext } from "react"
import { CartContext } from "../../context/CartContext/CartState"
import { handleRoundPrice } from "../../utils/price"
import CheckoutModal from "./CheckoutModal"

const CheckoutSection = () => {
  const { products } = useContext(CartContext)

  function getTotalPrice() {
    if (products.length > 0) {
      const totalPrice = products
        .map(product => +product.count * +product.price)
        .reduce((price, nextPrice) => price + nextPrice)

      return totalPrice
    } else {
      return 0
    }
  }

  return (
    <section className="CheckoutSection | mt-3 bg-light p-3 all-center-column align-items-end">
      <div className="text-right">
        <div>
          <b>Subtotal: </b>
          <span>RM{getTotalPrice()}</span>
        </div>

        <div>
          <b>Total Payment: </b>
          <span>RM{handleRoundPrice(getTotalPrice())}</span>
        </div>

        <div className="text-muted mt-1">No extra fee will be charged.</div>

        <button className="btn btn-secondary btn-md mt-3">Checkout</button>
      </div>

      <CheckoutModal />
    </section>
  )
}

export default CheckoutSection

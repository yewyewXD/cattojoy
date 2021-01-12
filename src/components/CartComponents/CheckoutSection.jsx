import React, { useContext } from "react"
import { CartContext } from "../../context/CartContext/CartState"
import { handleRoundPrice } from "../../utils/price"

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
      <div>
        <div>
          <b>Subtotal: </b>
          <span>RM{getTotalPrice()}</span>
        </div>

        <div>
          <b>Total Payment: </b>
          <span>RM{handleRoundPrice(getTotalPrice())}</span>
        </div>
      </div>
    </section>
  )
}

export default CheckoutSection

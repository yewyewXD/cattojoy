import React, { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext/CartState"
import { handleRoundPrice } from "../../utils/price"
import CheckoutModal from "./CheckoutModal"

const CheckoutSection = () => {
  const { products } = useContext(CartContext)

  const [modalIsOpen, setModalIsOpen] = useState(false)

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
    <section className="CheckoutSection | bgLight mt-3 p-3 all-center-column align-items-end">
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

        <button
          className="btn btn-secondary btn-md mt-3"
          title={products.length === 0 ? "No product had been added" : ""}
          disabled={products.length === 0}
          onClick={() => {
            setModalIsOpen(true)
          }}
        >
          Checkout
        </button>
      </div>

      <CheckoutModal
        isShowing={modalIsOpen}
        onCloseModal={() => {
          setModalIsOpen(false)
        }}
      />
    </section>
  )
}

export default CheckoutSection

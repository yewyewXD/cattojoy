import React, { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext/CartState"
import {
  handleRoundPrice,
  handleFixPriceToTwoDecimals,
} from "../../utils/price"
import CheckoutModal from "./CheckoutModal"
import SuccessModal from "./SuccessModal"

const CheckoutSection = () => {
  const { products, clearAllProducts } = useContext(CartContext)

  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [successModalIsOpen, setSuccessModalIsOpen] = useState(true)
  const [checkoutInfo, setCheckoutInfo] = useState(null)

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

  function onCheckoutSuccess(paymentMethod, finalTotal) {
    clearAllProducts()
    setModalIsOpen(false)
    setSuccessModalIsOpen(true)
    setCheckoutInfo({ ...paymentMethod, total: finalTotal })
  }

  return (
    <section className="CheckoutSection | bgLight mt-3 p-3 all-center-column align-items-end">
      <div className="text-right">
        <div>
          <b>Subtotal: </b>
          <span>RM{handleFixPriceToTwoDecimals(getTotalPrice())}</span>
        </div>

        <div>
          <b>Total Payment: </b>
          <span>RM{handleRoundPrice(getTotalPrice())}</span>
        </div>

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
        total={handleRoundPrice(getTotalPrice()).toString()}
        onCloseModal={() => {
          setModalIsOpen(false)
        }}
        onCheckoutSuccess={onCheckoutSuccess}
      />

      {checkoutInfo && (
        <SuccessModal
          isOpen={successModalIsOpen}
          checkoutInfo={checkoutInfo}
          onCloseModal={() => {
            setSuccessModalIsOpen(false)
          }}
        />
      )}
    </section>
  )
}

export default CheckoutSection

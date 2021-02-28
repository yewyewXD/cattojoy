import React from "react"
import Modal from "../ReusableComponents/Modal"

const CheckoutModal = () => {
  return (
    <div className="CheckoutModal">
      <Modal title="Checkout Form" isShowing={true} />
    </div>
  )
}

export default CheckoutModal

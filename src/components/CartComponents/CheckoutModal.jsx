import React from "react"
import Modal from "../ReusableComponents/Modal"

const CheckoutModal = ({ isShowing, onCloseModal }) => {
  return (
    <Modal
      title="Checkout Form"
      isShowing={isShowing}
      onCloseModal={onCloseModal}
    >
      testing
    </Modal>
  )
}

export default CheckoutModal

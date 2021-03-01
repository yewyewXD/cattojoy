import React from "react"
import Modal from "../ReusableComponents/Modal"

const CheckoutModal = ({ isShowing, onCloseModal }) => {
  return (
    <Modal
      title="Confirm order and pay"
      isShowing={isShowing}
      onCloseModal={onCloseModal}
    >
      <div>
        <div>asd</div>
        <div>qwe</div>
      </div>
    </Modal>
  )
}

export default CheckoutModal

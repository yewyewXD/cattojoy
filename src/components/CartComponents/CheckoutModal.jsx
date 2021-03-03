import React from "react"
import Modal from "../ReusableComponents/Modal"

const CheckoutModal = ({ isShowing, onCloseModal, total }) => {
  return (
    <Modal
      // title="Confirm order and pay"
      isShowing={isShowing}
      onCloseModal={onCloseModal}
    >
      {/* payment container */}
      <div style={{ padding: "1rem", width: "600px", background: "lightgrey" }}>
        {/* methods container */}
        <h5 className="mt-3">PAYMENT METHODS</h5>
        <div className="all-center justify-content-between mt-2">
          <span>Method</span>
          <span>Method</span>
          <span>Method</span>
        </div>

        {/* detail container */}
        <h5 className="mt-5">PAYMENT DETAILS</h5>
        <div>total {total}</div>
      </div>

      {/* receipt container */}
    </Modal>
  )
}

export default CheckoutModal

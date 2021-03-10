import React from "react"
import Modal from "../ReusableComponents/Modal"

const SuccessModal = ({ isOpen, onCloseModal }) => {
  return (
    <div>
      <Modal
        // title="Confirm order and pay"
        isShowing={isOpen}
        onCloseModal={onCloseModal}
      >
        <div className="SuccessModal">testing</div>
      </Modal>
    </div>
  )
}

export default SuccessModal

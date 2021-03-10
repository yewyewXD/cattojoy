import React from "react"
import Modal from "../ReusableComponents/Modal"

const SuccessModal = ({ isOpen }) => {
  return (
    <div>
      <Modal
        // title="Confirm order and pay"
        isShowing={isOpen}
        onCloseModal={() => {
          console.log("ok")
        }}
      >
        <div className="SuccessModal">testing</div>
      </Modal>
    </div>
  )
}

export default SuccessModal

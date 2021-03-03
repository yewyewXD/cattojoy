import React from "react"
import Modal from "../ReusableComponents/Modal"

const CheckoutModal = ({ isShowing, onCloseModal, total }) => {
  return (
    <Modal
      // title="Confirm order and pay"
      isShowing={isShowing}
      onCloseModal={onCloseModal}
    >
      {/* modal body */}
      <div className="CheckoutModal" style={{ width: "600px" }}>
        {/* payment details */}
        <div className="PaymentDetails | bg-white rounded shadow p-3">
          <h5 className="PaymentDetails__Title">PAYMENT DETAILS</h5>

          <div className="InputContainer">
            <input id="cardholderName" type="text" required />
            <div className="InputLine"></div>
            <label htmlFor="cardholderName">Cardholder name</label>
          </div>

          <div className="InputContainer">
            <input id="cardNumber" type="text" required />
            <div className="InputLine"></div>
            <label htmlFor="cardNumber">Card number</label>
          </div>

          <div className="InputContainer">
            <input id="cvv" type="text" required />
            <div className="InputLine"></div>
            <label htmlFor="cvv">CVV</label>
          </div>
        </div>

        {/* <div>total {total}</div> */}
      </div>

      {/* receipt container */}
    </Modal>
  )
}

export default CheckoutModal

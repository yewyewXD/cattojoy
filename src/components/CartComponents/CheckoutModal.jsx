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
      <div className="CheckoutModal">
        {/* card details */}
        <div className="CardDetails | bg-white rounded shadow-sm">
          <h5 className="CardDetails__Title | heading">PAYMENT DETAILS</h5>

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

          <div className="InputContainer mb-0">
            <input id="cvv" type="text" required />
            <div className="InputLine"></div>
            <label htmlFor="cvv">CVV</label>
          </div>
        </div>

        {/* payment detail */}
        <div className="PaymentDetails | text-white rounded shadow-sm">
          <div className="TotalPrice">
            <div className="TotalPrice__Title"> You have to pay</div>
            <h1 className="TotalPrice__Content | heading mb-0">{total}</h1>
          </div>

          <div className="PaymentInfo">
            <div className="PaymentInfoColumn">
              <div className="PaymentInfoColumn__Title">Company</div>
              <div className="PaymentInfoColumn__Content">Catto Joy</div>
            </div>

            <div className="PaymentInfoColumn">
              <div className="PaymentInfoColumn__Title">Order number</div>
              <div className="PaymentInfoColumn__Content">xxx</div>
            </div>

            <div className="PaymentInfoColumn">
              <div className="PaymentInfoColumn__Title">Service</div>
              <div className="PaymentInfoColumn__Content">Cat Toys</div>
            </div>
          </div>
        </div>
      </div>

      {/* receipt container */}
    </Modal>
  )
}

export default CheckoutModal

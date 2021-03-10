import React from "react"
import Modal from "../ReusableComponents/Modal"

const SuccessModal = ({ isOpen, onCloseModal, checkoutInfo }) => {
  const {
    line1,
    line2,
    postal_code: postalCode,
    city,
    state,
  } = checkoutInfo.billing_details.address
  const { funding: cardType, last4: lastDigits } = checkoutInfo.card
  const { name, email, phone } = checkoutInfo.billing_details
  const total = (+checkoutInfo.total / 100).toString()

  return (
    <div>
      <Modal
        title="Payment Success!"
        isShowing={isOpen}
        onCloseModal={onCloseModal}
      >
        <div className="SuccessModal | text-white rounded shadow-sm">
          <div className="TotalPrice">
            <div className="TotalPrice__Title">You have paid</div>
            <div className="d-flex align-items-end">
              <h1 className="TotalPrice__BigNumber | heading mb-0">
                {total.indexOf(".") < 0
                  ? total
                  : total.substr(0, total.indexOf("."))}
              </h1>
              <h3 className="TotalPrice__SmallNumber | heading m-0">
                {total.indexOf(".") > -1 &&
                  total.substr(total.indexOf("."), total.length - 1)}
                <span className="TotalPrice__Currency"> MYR</span>
              </h3>
            </div>
          </div>

          <div className="PaymentInfo">
            <div className="PaymentInfoColumn">
              <div className="PaymentInfoColumn__Title">Billing Address</div>
              <div className="PaymentInfoColumn__Content">
                <div>{line1}</div>
                {line2 ? <div>{line2}</div> : null}
                <div>
                  {postalCode} {city}, {state}
                </div>
              </div>
            </div>

            <div className="PaymentInfoColumn">
              <div className="PaymentInfoColumn__Title">Transaction Info</div>
              <div className="PaymentInfoColumn__Content">
                <div>
                  <span className="text-capitalize">{cardType}</span> card ended
                  with {lastDigits}
                </div>
              </div>
            </div>

            <div className="PaymentInfoColumn">
              <div className="PaymentInfoColumn__Title">Buyer Info</div>
              <div className="PaymentInfoColumn__Content">
                <div>Name: {name}</div>
                <div>Email: {email}</div>
                {phone ? <div>Phone Number: {phone}</div> : null}
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default SuccessModal

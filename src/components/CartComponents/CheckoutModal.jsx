import React, { useState } from "react"
import Modal from "../ReusableComponents/Modal"
import axios from "axios"
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js"

const CheckoutModal = ({ isShowing, onCloseModal, total }) => {
  const stripe = useStripe()
  const elements = useElements()

  const [isCreatingPaymentIntent, setIsCreatingPaymentIntent] = useState(false)
  // const [cardHolderName,setCardHolderName]=useState('')
  // const [cardNumber,setCardNumber]=useState(0)
  // const [cvv,setCvv]=useState(0)

  async function handleCreatePayment() {
    setIsCreatingPaymentIntent(true)
    try {
      const res = await axios.post("/.netlify/functions/payment", {
        amount: +total * 100,
      })
      console.log(res.data)
      setIsCreatingPaymentIntent(false)

      const cardElement = elements.getElement(CardElement)
      const paymentMethodReq = stripe.createPaymentMethod({
        type: "card",
        card: cardElement,
        billing_details: {
          name: "",
          email: "",
          address: {
            line1: "",
            line2: "",
            postal_code: "",
            city: "",
            state: "",
          },
          phone: "",
        },
      })

      console.log(paymentMethodReq)
    } catch (err) {
      setIsCreatingPaymentIntent(false)
      console.log(err)
    }
  }

  return (
    <Modal
      // title="Confirm order and pay"
      isShowing={isShowing}
      onCloseModal={onCloseModal}
    >
      {/* modal body */}
      <div className="CheckoutModal | py-4 px-1">
        {/* card details */}
        <div className="CardDetails | bg-white rounded shadow-sm">
          <h5 className="CardDetails__Title | heading">SHIPPING DETAILS</h5>

          <div className="InputContainer">
            <input id="cardholderName" type="text" required />
            <div className="InputLine"></div>
            <label htmlFor="cardholderName">Full name</label>
          </div>

          <div className="InputContainer">
            <input id="cardNumber" type="email" required />
            <div className="InputLine"></div>
            <label htmlFor="cardNumber">Email</label>
          </div>

          <div className="InputContainer">
            <input id="cardNumber" type="text" required />
            <div className="InputLine"></div>
            <label htmlFor="cardNumber">Address Line 1</label>
          </div>

          <div className="InputContainer">
            <input id="cardNumber" type="text" required />
            <div className="InputLine"></div>
            <label htmlFor="cardNumber">Address Line 2</label>
          </div>

          <div className="d-flex justify-content-md-between flex-md-row flex-column">
            <div className="InputContainerTight">
              <input id="cardNumber" type="text" required />
              <div className="InputLine"></div>
              <label htmlFor="cardNumber">City</label>
            </div>

            <div className="InputContainerTight">
              <input id="cardNumber" type="text" required />
              <div className="InputLine"></div>
              <label htmlFor="cardNumber">State</label>
            </div>

            <div className="InputContainerTight">
              <input id="cardNumber" type="text" required />
              <div className="InputLine"></div>
              <label htmlFor="cardNumber">Zip code</label>
            </div>
          </div>
        </div>

        {/* payment detail */}
        <div className="PaymentDetails | text-white rounded shadow-sm">
          <div className="TotalPrice">
            <div className="TotalPrice__Title"> You have to pay</div>
            <div className="d-flex align-items-end">
              <h1 className="TotalPrice__BigNumber | heading mb-0">
                {total.indexOf(".") < 0
                  ? total
                  : total.substr(0, total.indexOf("."))}
              </h1>
              {total.indexOf(".") > -1 && (
                <h3 className="TotalPrice__SmallNumber | heading m-0">
                  {total.substr(total.indexOf("."), total.length - 1)}
                  <span className="TotalPrice__Currency"> MYR</span>
                </h3>
              )}
            </div>
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

            <div className="InputContainer mb-0">
              {/* <input id="cvv" type="text" required />
            <div className="InputLine"></div>
            <label htmlFor="cvv">CVV</label> */}

              <CardElement
                options={{
                  style: {
                    base: {
                      fontSize: "19px",
                      color: "white",
                      "::placeholder": {
                        color: "#f1f1f1",
                      },
                    },
                    invalid: {
                      color: "#dc3545",
                      iconColor: "#dc3545",
                    },
                  },
                  hidePostalCode: true,
                }}
              />
            </div>
          </div>
        </div>

        {/* pay button */}
        <div className="text-right">
          <button
            disabled={isCreatingPaymentIntent}
            className="btn btn-secondary btn-md"
            onClick={handleCreatePayment}
          >
            Pay {total} MYR
          </button>
        </div>
      </div>
    </Modal>
  )
}

export default CheckoutModal

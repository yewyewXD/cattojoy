import React, { useState } from "react"
import Modal from "../ReusableComponents/Modal"
import axios from "axios"
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js"
import ShippingDetails from "./ShippingDetails"

const CheckoutModal = ({ isShowing, onCloseModal, total }) => {
  const stripe = useStripe()
  const elements = useElements()
  const [isCreatingPaymentIntent, setIsCreatingPaymentIntent] = useState(false)

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [addressOne, setAddressOne] = useState("")
  const [addressTwo, setAddressTwo] = useState("")
  const [city, setCity] = useState("")
  const [state, setState] = useState("")
  const [postal, setPostal] = useState("")

  async function handleCreatePayment() {
    setIsCreatingPaymentIntent(true)
    // try {
    //   const res = await axios.post("/.netlify/functions/payment", {
    //     amount: +total * 100,
    //   })
    //   console.log(res.data)
    //   setIsCreatingPaymentIntent(false)

    //   const cardElement = elements.getElement(CardElement)
    //   const paymentMethodReq = stripe.createPaymentMethod({
    //     type: "card",
    //     card: cardElement,
    //     billing_details: {
    //       name: "",
    //       email: "",
    //       address: {
    //         line1: "",
    //         line2: "",
    //         postal_code: "",
    //         city: "",
    //         state: "",
    //       },
    //       phone: "",
    //     },
    //   })

    //   console.log(paymentMethodReq)
    // } catch (err) {
    //   setIsCreatingPaymentIntent(false)
    //   console.log(err)
    // }
  }

  return (
    <Modal
      // title="Confirm order and pay"
      isShowing={isShowing}
      onCloseModal={onCloseModal}
    >
      {/* modal body */}
      <form
        className="CheckoutModal | py-4 px-1"
        onSubmit={handleCreatePayment}
      >
        {/* shipping details */}

        <ShippingDetails
          setName={setName}
          setEmail={setEmail}
          setAddressOne={setAddressOne}
          setAddressTwo={setAddressTwo}
          setCity={setCity}
          setState={setState}
          setPostal={setPostal}
        />

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
            type="submit"
            disabled={isCreatingPaymentIntent}
            className="btn btn-secondary btn-md"
            onClick={handleCreatePayment}
          >
            Pay {total} MYR
          </button>
        </div>
      </form>
    </Modal>
  )
}

export default CheckoutModal

import React, { useState, useRef } from "react"
import Modal from "../ReusableComponents/Modal"
import axios from "axios"
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js"
import ShippingDetails from "./ShippingDetails"
import useDidMountEffect from "../../utils/useDidMountEffect"
import Spinner from "react-loader-spinner"

const CheckoutModal = ({
  isShowing,
  onCloseModal,
  total,
  onCheckoutSuccess,
}) => {
  const stripe = useStripe()
  const elements = useElements()
  const cardElementSectionRef = useRef()
  const [isCreatingPayment, setIsCreatingPayment] = useState(false)

  const [isValidating, setIsValidating] = useState(0)
  const [shippingDetails, setShippingDetails] = useState(null)

  const [cardError, setCardError] = useState(null)

  async function handleCreatePayment() {
    setIsCreatingPayment(true)
    const finalTotal = +(+total * 100).toFixed(2)

    try {
      const clientSecretReq = await axios.post("/.netlify/functions/payment", {
        amount: finalTotal,
      })
      const clientSecret = clientSecretReq.data.client_secret

      const cardElement = elements.getElement(CardElement)

      const paymentMethodReq = await stripe.createPaymentMethod({
        type: "card",
        card: cardElement,
        billing_details: shippingDetails,
      })

      if (paymentMethodReq.error) {
        const error = paymentMethodReq.error.message
        setCardError(error)
        cardElementSectionRef.current.scrollIntoView()
        setIsCreatingPayment(false)
        return
      }

      const confirmedCardPayment = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: paymentMethodReq.paymentMethod.id,
        }
      )

      if (confirmedCardPayment.error) {
        alert(confirmedCardPayment.error.message)
        setIsCreatingPayment(false)
        return
      }

      // After payment is successfully
      setIsCreatingPayment(false)
      onCheckoutSuccess(paymentMethodReq.paymentMethod, finalTotal)
    } catch (err) {
      setIsCreatingPayment(false)
      console.log(err)
    }
  }

  function activateValidation(e) {
    e.preventDefault()
    if (isValidating) {
      setIsValidating(prevValidCount => prevValidCount + 1)
    } else {
      setIsValidating(1)
    }
  }

  useDidMountEffect(() => {
    if (!shippingDetails) {
      return
    } else {
      handleCreatePayment()
    }
  }, [isValidating])

  return (
    <Modal
      // title="Confirm order and pay"
      isShowing={isShowing}
      onCloseModal={onCloseModal}
    >
      {/* modal body */}
      <div className="CheckoutModal | py-4 px-1">
        <div className="CardDetails | bg-white rounded shadow-sm">
          <div className="CardDetails__Title | heading">Payment Methods</div>
          {/* test card tips */}
          <div className="CardDetails__TestCardMsg | rounded">
            <small>
              Use 4242 4242 4242 4242 with random card expiry date and CVC to
              test the payment
            </small>
          </div>
          <div ref={cardElementSectionRef}></div>
          <div className="CardElementContainer | border rounded mb-0">
            <CardElement
              options={{
                style: {
                  base: {
                    fontSize: "19px",
                    color: "#000000",
                    "::placeholder": {
                      color: "#808080",
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
          {cardError && (
            <div className="CardElementContainer__Error">
              <small className="text-danger">{cardError}</small>
            </div>
          )}
        </div>

        {/* shipping details */}
        <ShippingDetails
          setShippingDetails={setShippingDetails}
          isValidating={isValidating}
        />

        {/* payment detail */}
        <div className="PaymentDetails | text-white rounded shadow-sm">
          <div className="TotalPrice">
            <div className="TotalPrice__Title">You have to pay</div>
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
              <div className="PaymentInfoColumn__Title">Service</div>
              <div className="PaymentInfoColumn__Content">Cat Toys</div>
            </div>
          </div>
        </div>

        {/* pay button */}
        <div className="text-right">
          <button
            type="button"
            disabled={isCreatingPayment}
            className="actionButton btn btn-secondary btn-md"
            onClick={activateValidation}
          >
            {isCreatingPayment ? (
              <Spinner
                type="ThreeDots"
                color="#ffffff"
                height={10}
                width={110}
              />
            ) : (
              <>Pay {total} MYR</>
            )}
          </button>
        </div>
      </div>
    </Modal>
  )
}

export default CheckoutModal

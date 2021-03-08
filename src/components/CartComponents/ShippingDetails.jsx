import React, { useRef, useState } from "react"
import { handleEmailChange, handleTextChange } from "../../utils/fieldChange"
import useDidMountEffect from "../../utils/useDidMountEffect"

const ShippingDetails = ({ setShippingDetails, isValidating }) => {
  const detailUpperRef = useRef()
  const detailLowerRef = useRef()

  const [name, setName] = useState({ content: "" })
  const [email, setEmail] = useState({ content: "" })
  const [phone, setPhone] = useState({ content: "" })
  const [addressOne, setAddressOne] = useState({ content: "" })

  const [addressTwo, setAddressTwo] = useState({ content: "" })
  const [city, setCity] = useState({ content: "" })
  const [state, setState] = useState({ content: "" })
  const [postal, setPostal] = useState({ content: "" })

  useDidMountEffect(() => {
    if (!name.isValid || !email.isValid || !addressOne.isValid) {
      detailUpperRef.current.scrollIntoView()
    } else if (!city.isValid || !state.isValid || !postal.isValid) {
      detailLowerRef.current.scrollIntoView()
    } else {
      const shippingDetails = {
        name: name.content,
        email: email.content,
        address: {
          line1: addressOne.content,
          postal_code: postal.content,
          city: city.content,
          state: state.content,
        },
      }
      if (addressTwo.isValid) {
        shippingDetails.address.line2 = addressTwo.content
      }
      if (phone.isValid) {
        shippingDetails.phone = phone.content
      }

      setShippingDetails()
    }
  }, [isValidating])

  return (
    <div className="ShippingDetails | bg-white rounded shadow-sm">
      <div ref={detailUpperRef}></div>
      <h5 className="ShippingDetails__Title | heading">SHIPPING DETAILS</h5>

      <div className="InputContainer">
        <input
          className={`Input ${
            isValidating > 0 && !name.isValid ? "Input--error" : ""
          }`}
          id=""
          type="text"
          value={name.content}
          onChange={e => {
            handleTextChange(setName, e)
          }}
          required
        />
        <div className={`InputLine`}></div>
        <label htmlFor="">Full name</label>
      </div>

      <div className="InputContainer">
        <input
          className={`Input  ${
            isValidating > 0 && !email.isValid ? "Input--error" : ""
          }`}
          id=""
          type="text"
          value={email.content}
          onChange={e => {
            handleEmailChange(setEmail, e)
          }}
          required
        />
        <div className={`InputLine`}></div>
        <label htmlFor="">Email</label>
      </div>

      <div className="InputContainer">
        <input
          className={`Input`}
          id=""
          type="text"
          value={phone.content}
          onChange={e => {
            handleTextChange(setPhone, e)
          }}
          required
        />
        <div className={`InputLine`}></div>
        <label htmlFor="">Phone Number (optional)</label>
      </div>

      <div ref={detailLowerRef}></div>
      <div className="InputContainer">
        <input
          className={`Input ${
            isValidating > 0 && !addressOne.isValid ? "Input--error" : ""
          }`}
          id=""
          type="text"
          value={addressOne.content}
          onChange={e => {
            handleTextChange(setAddressOne, e)
          }}
          required
        />
        <div className={`InputLine`}></div>
        <label htmlFor="">Address Line 1</label>
      </div>

      <div className="InputContainer">
        <input
          className={`Input`}
          id=""
          type="text"
          value={addressTwo.content}
          onChange={e => {
            handleTextChange(setAddressTwo, e)
          }}
          required
        />
        <div className={`InputLine`}></div>
        <label htmlFor="">Address Line 2 (optional)</label>
      </div>

      <div className="d-flex justify-content-md-between flex-md-row flex-column">
        <div className="InputContainerTight">
          <input
            className={`Input ${
              isValidating > 0 && !city.isValid ? "Input--error" : ""
            }`}
            id=""
            type="text"
            value={city.content}
            onChange={e => {
              handleTextChange(setCity, e)
            }}
            required
          />
          <div className={`InputLine`}></div>
          <label htmlFor="">City</label>
        </div>

        <div className="InputContainerTight">
          <input
            className={`Input ${
              isValidating > 0 && !state.isValid ? "Input--error" : ""
            }`}
            id=""
            type="text"
            value={state.content}
            onChange={e => {
              handleTextChange(setState, e)
            }}
            required
          />
          <div className={`InputLine`}></div>
          <label htmlFor="">State</label>
        </div>

        <div className="InputContainerTight">
          <input
            className={`Input ${
              isValidating > 0 && !postal.isValid ? "Input--error" : ""
            }`}
            id=""
            type="number"
            value={postal.content}
            onChange={e => {
              handleTextChange(setPostal, e)
            }}
            required
          />
          <div className={`InputLine`}></div>
          <label htmlFor="">Zip code</label>
        </div>
      </div>
    </div>
  )
}

export default ShippingDetails

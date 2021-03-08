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
    } else if (
      !addressTwo.isValid ||
      !city.isValid ||
      !state.isValid ||
      !postal.isValid
    ) {
      detailLowerRef.current.scrollIntoView()
    } else {
      setShippingDetails({
        name: name.content,
        email: email.content,
        address: {
          line1: addressTwo.content,
          line2: addressOne.content,
          postal_code: postal.content,
          city: city.content,
          state: state.content,
        },
        phone: phone.isValid ? phone.content : "",
      })
    }
  }, [isValidating])

  return (
    <div className="ShippingDetails | bg-white rounded shadow-sm">
      <div ref={detailUpperRef}></div>
      <h5 className="ShippingDetails__Title | heading">SHIPPING DETAILS</h5>

      <div className="InputContainer">
        <input
          id=""
          type="text"
          value={name.content}
          onChange={e => {
            handleTextChange(setName, e)
          }}
          required
        />
        <div
          className={`InputLine ${
            isValidating > 0 && !name.isValid ? "InputLine--error" : ""
          }`}
        ></div>
        <label htmlFor="">Full name</label>
      </div>

      <div className="InputContainer">
        <input
          id=""
          type="email"
          value={email.content}
          onChange={e => {
            handleEmailChange(setEmail, e)
          }}
          required
        />
        <div
          className={`InputLine ${
            isValidating > 0 && !email.isValid ? "InputLine--error" : ""
          }`}
        ></div>
        <label htmlFor="">Email</label>
      </div>

      <div className="InputContainer">
        <input
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
          id=""
          type="text"
          value={addressOne.content}
          onChange={e => {
            handleTextChange(setAddressOne, e)
          }}
          required
        />
        <div
          className={`InputLine ${
            isValidating > 0 && !addressOne.isValid ? "InputLine--error" : ""
          }`}
        ></div>
        <label htmlFor="">Address Line 1</label>
      </div>

      <div className="InputContainer">
        <input
          id=""
          type="text"
          value={addressTwo.content}
          onChange={e => {
            handleTextChange(setAddressTwo, e)
          }}
          required
        />
        <div className={`InputLine`}></div>
        <label htmlFor="">Address Line 2</label>
      </div>

      <div className="d-flex justify-content-md-between flex-md-row flex-column">
        <div className="InputContainerTight">
          <input
            id=""
            type="text"
            value={city.content}
            onChange={e => {
              handleTextChange(setCity, e)
            }}
            required
          />
          <div
            className={`InputLine ${
              isValidating > 0 && !city.isValid ? "InputLine--error" : ""
            }`}
          ></div>
          <label htmlFor="">City</label>
        </div>

        <div className="InputContainerTight">
          <input
            id=""
            type="text"
            value={state.content}
            onChange={e => {
              handleTextChange(setState, e)
            }}
            required
          />
          <div
            className={`InputLine ${
              isValidating > 0 && !state.isValid ? "InputLine--error" : ""
            }`}
          ></div>
          <label htmlFor="">State</label>
        </div>

        <div className="InputContainerTight">
          <input
            id=""
            type="number"
            value={postal.content}
            onChange={e => {
              handleTextChange(setPostal, e)
            }}
            required
          />
          <div
            className={`InputLine ${
              isValidating > 0 && !postal.isValid ? "InputLine--error" : ""
            }`}
          ></div>
          <label htmlFor="">Zip code</label>
        </div>
      </div>
    </div>
  )
}

export default ShippingDetails

import React, { useRef, useState } from "react"
import { handleEmailChange, handleTextChange } from "../../utils/fieldChange"
import useDidMountEffect from "../../utils/useDidMountEffect"

const ShippingDetails = ({ setShippingDetails, isValidating }) => {
  const detailUpperRef = useRef()
  const detailLowerRef = useRef()

  const [name, setName] = useState({ content: "" })
  const [email, setEmail] = useState({ content: "" })
  const [phone, setPhone] = useState({ content: 0 })
  const [addressOne, setAddressOne] = useState({ content: "" })

  const [addressTwo, setAddressTwo] = useState({ content: "" })
  const [city, setCity] = useState({ content: "" })
  const [state, setState] = useState({ content: "" })
  const [postal, setPostal] = useState({ content: 0 })

  useDidMountEffect(() => {
    if (
      !name.isValid ||
      !email.isValid ||
      !phone.isValid ||
      !addressOne.isValid
    ) {
      detailUpperRef.current.scrollIntoView()
    } else if (
      !addressTwo.isValid ||
      !city.isValid ||
      !state.isValid ||
      !postal.isValid
    ) {
      detailLowerRef.current.scrollIntoView()
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
        <div className="InputLine"></div>
        <label htmlFor="">Full name</label>
        {isValidating && !name.isValid && (
          <div className="InputContainer__Error">
            <small>error</small>
          </div>
        )}
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
        <div className="InputLine"></div>
        <label htmlFor="">Email</label>
        {isValidating && !email.isValid && (
          <div className="InputContainer__Error">
            <small>error</small>
          </div>
        )}
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
        <div className="InputLine"></div>
        <label htmlFor="">Phone Number</label>
        {isValidating && !phone.isValid && (
          <div className="InputContainer__Error">
            <small>error</small>
          </div>
        )}
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
        <div className="InputLine"></div>
        <label htmlFor="">Address Line 1</label>
        {isValidating && !addressOne.isValid && (
          <div className="InputContainer__Error">
            <small>error</small>
          </div>
        )}
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
        <div className="InputLine"></div>
        <label htmlFor="">Address Line 2</label>
        {isValidating && !addressTwo.isValid && (
          <div className="InputContainer__Error">
            <small>error</small>
          </div>
        )}
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
          <div className="InputLine"></div>
          <label htmlFor="">City</label>
          {isValidating && !city.isValid && (
            <div className="InputContainer__Error">
              <small>error</small>
            </div>
          )}
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
          <div className="InputLine"></div>
          <label htmlFor="">State</label>
          {isValidating && !state.isValid && (
            <div className="InputContainer__Error">
              <small>error</small>
            </div>
          )}
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
          <div className="InputLine"></div>
          <label htmlFor="">Zip code</label>
          {isValidating && !postal.isValid && (
            <div className="InputContainer__Error">
              <small>error</small>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ShippingDetails

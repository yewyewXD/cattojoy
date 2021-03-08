import React, { useRef, useState } from "react"
import useDidMountEffect from "../../utils/useDidMountEffect"

const ShippingDetails = ({ setShippingDetails, isValidating }) => {
  const detailUpperRef = useRef()
  const detailLowerRef = useRef()

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [addressOne, setAddressOne] = useState("")
  const [addressTwo, setAddressTwo] = useState("")
  const [city, setCity] = useState("")
  const [state, setState] = useState("")
  const [postal, setPostal] = useState("")

  useDidMountEffect(() => {}, [isValidating])

  return (
    <div className="ShippingDetails | bg-white rounded shadow-sm">
      <h5 className="ShippingDetails__Title | heading">SHIPPING DETAILS</h5>

      <div ref={detailUpperRef}></div>
      <div className="InputContainer">
        <input id="" type="text" value={name} required />
        <div className="InputLine"></div>
        <label htmlFor="">Full name</label>
        <div className="InputContainer__Error">
          <small>error</small>
        </div>
      </div>

      <div className="InputContainer">
        <input id="" type="email" value={email} required />
        <div className="InputLine"></div>
        <label htmlFor="">Email</label>
        <div className="InputContainer__Error">
          <small>error</small>
        </div>
      </div>

      <div className="InputContainer">
        <input id="" type="text" value={addressOne} required />
        <div className="InputLine"></div>
        <label htmlFor="">Address Line 1</label>
        <div className="InputContainer__Error">
          <small>error</small>
        </div>
      </div>

      <div ref={detailLowerRef}></div>
      <div className="InputContainer">
        <input id="" type="text" value={addressTwo} required />
        <div className="InputLine"></div>
        <label htmlFor="">Address Line 2</label>
        <div className="InputContainer__Error">
          <small>error</small>
        </div>
      </div>

      <div className="d-flex justify-content-md-between flex-md-row flex-column">
        <div className="InputContainerTight">
          <input id="" type="text" value={city} required />
          <div className="InputLine"></div>
          <label htmlFor="">City</label>
          <div className="InputContainer__Error">
            <small>error</small>
          </div>
        </div>

        <div className="InputContainerTight">
          <input id="" type="text" value={state} required />
          <div className="InputLine"></div>
          <label htmlFor="">State</label>
          <div className="InputContainer__Error">
            <small>error</small>
          </div>
        </div>

        <div className="InputContainerTight">
          <input id="" type="number" value={postal} required />
          <div className="InputLine"></div>
          <label htmlFor="">Zip code</label>
          <div className="InputContainer__Error">
            <small>error</small>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShippingDetails

import React from "react"

const ShippingDetails = ({
  setName,
  setEmail,
  setAddressOne,
  setAddressTwo,
  setCity,
  setState,
  setPostal,
}) => {
  return (
    <div className="ShippingDetails | bg-white rounded shadow-sm">
      <h5 className="ShippingDetails__Title | heading">SHIPPING DETAILS</h5>

      <div className="InputContainer">
        <input id="cardholderName" type="text" required />
        <div className="InputLine"></div>
        <label htmlFor="cardholderName">Full name</label>
        <div className="InputContainer__Error">
          <small>error</small>
        </div>
      </div>

      <div className="InputContainer">
        <input id="cardNumber" type="email" required />
        <div className="InputLine"></div>
        <label htmlFor="cardNumber">Email</label>
        <div className="InputContainer__Error">
          <small>error</small>
        </div>
      </div>

      <div className="InputContainer">
        <input id="cardNumber" type="text" required />
        <div className="InputLine"></div>
        <label htmlFor="cardNumber">Address Line 1</label>
        <div className="InputContainer__Error">
          <small>error</small>
        </div>
      </div>

      <div className="InputContainer">
        <input id="cardNumber" type="text" required />
        <div className="InputLine"></div>
        <label htmlFor="cardNumber">Address Line 2</label>
        <div className="InputContainer__Error">
          <small>error</small>
        </div>
      </div>

      <div className="d-flex justify-content-md-between flex-md-row flex-column">
        <div className="InputContainerTight">
          <input id="cardNumber" type="text" required />
          <div className="InputLine"></div>
          <label htmlFor="cardNumber">City</label>
          <div className="InputContainer__Error">
            <small>error</small>
          </div>
        </div>

        <div className="InputContainerTight">
          <input id="cardNumber" type="text" required />
          <div className="InputLine"></div>
          <label htmlFor="cardNumber">State</label>
          <div className="InputContainer__Error">
            <small>error</small>
          </div>
        </div>

        <div className="InputContainerTight">
          <input id="cardNumber" type="number" required />
          <div className="InputLine"></div>
          <label htmlFor="cardNumber">Zip code</label>
          <div className="InputContainer__Error">
            <small>error</small>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShippingDetails

import React, { createContext, useReducer } from "react"
import CartReducer from "./CartReducer"

// Initial state
const initialState = {
  productCount: 0,
}

export const CartContext = createContext(initialState)

export const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, initialState)

  //Actions
  function action() {
    dispatch({
      type: "",
      payload: "",
    })
  }

  return (
    <CartContext.Provider
      value={{
        productCount: state.productCount,
        action,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

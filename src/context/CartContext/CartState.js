import React, { createContext, useReducer } from "react"
import CartReducer from "./CartReducer"

// Initial state
const initialState = {
  productCount: 0,
  products: [],
}

export const CartContext = createContext(initialState)

export const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, initialState)

  function increaseProductCount(product) {
    console.log("Increment")
    dispatch({
      type: "INCREASE_PRODUCT_COUNT",
      payload: { product },
    })
  }

  function decreaseProductCount(product) {
    console.log("Decrement")
    dispatch({
      type: "DECREASE_PRODUCT_COUNT",
      payload: { product },
    })
  }

  return (
    <CartContext.Provider
      value={{
        productCount: state.productCount,
        products: state.products,
        increaseProductCount,
        decreaseProductCount,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

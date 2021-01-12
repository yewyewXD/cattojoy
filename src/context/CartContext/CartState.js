import React, { createContext, useReducer, useEffect } from "react"
import CartReducer from "./CartReducer"

// Initial state
const initialState = {
  productCount: 0,
  products: [],
}

export const CartContext = createContext(initialState)

export const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, initialState, () => {
    const storedCart = localStorage.getItem("cart")
    return storedCart ? JSON.parse(storedCart) : initialState
  })

  // save to localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state))
  }, [state])

  // actions
  function increaseProductCount(product) {
    dispatch({
      type: "INCREASE_PRODUCT_COUNT",
      payload: { product },
    })
  }

  function decreaseProductCount(product) {
    dispatch({
      type: "DECREASE_PRODUCT_COUNT",
      payload: { product },
    })
  }

  function removeProduct(product) {
    dispatch({
      type: "REMOVE_PRODUCT",
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
        removeProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

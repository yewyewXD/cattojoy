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
    if (typeof window !== "undefined") {
      const storedCart = localStorage.getItem("cart")
      return storedCart ? JSON.parse(storedCart) : initialState
    } else {
      return initialState
    }
  })

  // save to localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("cart", JSON.stringify(state))
    }
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

  function clearAllProducts() {
    dispatch({
      type: "CLEAR_ALL_PRODUCTS",
      payload: null,
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
        clearAllProducts,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

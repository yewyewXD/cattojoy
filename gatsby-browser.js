import React from "react"
import { CartContextProvider } from "./src/context/CartContext/CartState"

export const wrapRootElement = ({ element }) => {
  return <CartContextProvider>{element}</CartContextProvider>
}

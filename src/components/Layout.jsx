import React from "react"
import { CartContextProvider } from "../context/CartContext/CartState"
import "bootstrap/dist/css/bootstrap.css"
import "../styles/final.scss"

import Header from "./ReusableComponents/Header"

const Layout = ({ children, currentPage }) => {
  return (
    <CartContextProvider>
      {/* header */}
      <Header currentPage={currentPage} />

      {/* main */}
      {children}

      {/* footer */}
      {currentPage !== "404" && (
        <footer className="Footer | py-3 text-center">
          <span className="heading">Catto Joy</span> © All Rights Reserved
        </footer>
      )}
    </CartContextProvider>
  )
}

export default Layout

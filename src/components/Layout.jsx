import React from "react"
import "bootstrap/dist/css/bootstrap.css"
import "../styles/final.scss"

import Header from "./ReusableComponents/Header"

const Layout = ({ children, currentPage }) => {
  return (
    <>
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
    </>
  )
}

export default Layout

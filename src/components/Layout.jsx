import React from "react"
import "bootstrap/dist/css/bootstrap.css"
import "../styles/final.scss"
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"

import Header from "./ReusableComponents/Header"

const stripePromise = loadStripe(process.env.GATSBY_STRIPE_PUBLISHABLE)

const Layout = ({ children, currentPage }) => {
  return (
    <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
      {/* header */}
      <Header currentPage={currentPage} />

      {/* main */}
      <Elements
        options={{
          fonts: [
            {
              cssSrc:
                "https://fonts.googleapis.com/css2?family=Titillium+Web:wght@600&display=swap",
            },
          ],
        }}
        stripe={stripePromise}
      >
        {children}
      </Elements>

      {/* footer */}
      {currentPage !== "404" && (
        <footer className="Footer | py-3 text-center">
          <span className="heading">Catto Joy</span> © All Rights Reserved
        </footer>
      )}
    </div>
  )
}

export default Layout

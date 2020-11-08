import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import "bootstrap/dist/css/bootstrap.css"
import "./layout.css"

const Layout = ({ children }) => (
  <>
    <header className="header">
      <nav className="navbar navbar-expand-md navbar-light my-4">
        <div className="container">
          <span
            className="navbar-brand d-flex align-items-center"
            role="button"
          >
            <span className="brand-text heading mx-2">Catto Joy</span>
          </span>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarID"
            aria-controls="navbarID"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarID">
            <div className="navbar-nav ml-auto">
              <Link className="nav-link mx-3" to="/">
                Home
              </Link>
              <Link className="nav-link mx-3" to="/blog">
                Blog
              </Link>
              <Link className="nav-link mx-3" to="/shop">
                Shop
              </Link>
              <Link className="nav-link mx-3" to="/contact">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>

    <main>{children}</main>

    <footer className="footer py-3 text-center">
      <span className="heading">Catto Joy</span> © All Rights Reserved
    </footer>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

import React from "react"
import PropTypes from "prop-types"
import "bootstrap/dist/css/bootstrap.css"
import "./layout.css"

const Layout = ({ children }) => <> {children}</>

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

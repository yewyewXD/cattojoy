import React, { useState, useContext } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons"
import { Link, useStaticQuery, graphql } from "gatsby"
import { CartContext } from "../../context/CartContext/CartState"

const Header = ({ currentPage }) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "favicon.png" }) {
        image: childImageSharp {
          fixed(quality: 70, width: 57) {
            src
          }
        }
      }
    }
  `)
  const navLinks = [
    { name: "home", path: "/" },
    // { name: "blogs", path: "/" },
    { name: "shop", path: "/shop" },
    { name: "contact", path: "/contact" },
  ]
  const [isShowingNavbar, setIsShowingNavbar] = useState(false)
  const { productCount } = useContext(CartContext)

  return (
    <header className="Header">
      <nav className="navbar navbar-expand-md navbar-light my-sm-3 my-md-4">
        <div className="container">
          {/* brand */}
          <Link className="text-decoration-none" to="/">
            <span
              className="navbar-brand d-flex align-items-center"
              role="button"
            >
              <img
                src={data.file.image.fixed.src}
                alt="Catto Joy"
                className="HeaderLogo mr-md-3 mr-2"
              />

              <span className="HeaderBrand | heading mx-2">Catto Joy</span>
            </span>
          </Link>

          {/* dropdown button */}
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarID"
            aria-controls="navbarID"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => {
              setIsShowingNavbar(prevIsShowing => !prevIsShowing)
            }}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* navbar menu */}
          <div
            className={`mt-md-0 mt-sm-3 mt-2 collapse navbar-collapse ${
              isShowingNavbar ? "show" : ""
            }`}
            id="navbarID"
          >
            <div className="navbar-nav ml-auto">
              {navLinks.map((navLink, index) => (
                <Link
                  key={`navLink-${index}`}
                  className={`nav-link text-capitalize mx-3 ${
                    currentPage === navLink.name ? "active" : ""
                  }`}
                  to={navLink.path}
                >
                  {navLink.name}
                </Link>
              ))}

              <Link
                className={`HeaderCart | btn btn-secondary btn-md all-center nav-link mx-3 my-md-0 my-3 ${
                  currentPage === "cart" ? "active" : ""
                }`}
                to="/cart"
              >
                <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />(
                {productCount})
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header

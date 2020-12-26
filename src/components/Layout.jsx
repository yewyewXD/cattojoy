import React, { useState } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import "bootstrap/dist/css/bootstrap.css"
import "../styles/global.scss"

const Layout = ({ children, currentPage }) => {
  const [isShowingNavbar, setIsShowingNavbar] = useState(false)

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
    { name: "blog", path: "/blog" },
    { name: "shop", path: "/shop" },
    { name: "contact", path: "/contact" },
  ]

  return (
    <>
      {/* header */}
      <header className="Header">
        <nav className="navbar navbar-expand-md navbar-light my-4">
          <div className="container">
            {/* brand */}
            <span
              className="navbar-brand d-flex align-items-center"
              role="button"
            >
              <img
                src={data.file.image.fixed.src}
                alt="Catto Joy"
                className="mx-2"
              />
              <span className="HeaderBrand | heading mx-2">Catto Joy</span>
            </span>

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
              className={`collapse navbar-collapse ${
                isShowingNavbar && "show"
              }`}
              id="navbarID"
            >
              <div className="navbar-nav ml-auto">
                {navLinks.map((navLink, index) => (
                  <Link
                    key={index}
                    className={`nav-link text-capitalize mx-3 ${
                      currentPage === navLink.name && "active"
                    }`}
                    to={navLink.path}
                  >
                    {navLink.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* main */}
      {children}

      {/* footer */}
      <footer className="Footer | py-3 text-center">
        <span className="heading">Catto Joy</span> © All Rights Reserved
      </footer>
    </>
  )
}

export default Layout

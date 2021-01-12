import React, { useContext } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { CartContext } from "../../context/CartContext/CartState"

const ProductsSection = ({ filterOption, viewType }) => {
  const data = useStaticQuery(graphql`
    {
      alphaASC: allContentfulProducts(sort: { fields: title, order: ASC }) {
        edges {
          node {
            id
            slug
            title
            price
            description {
              childMarkdownRemark {
                excerpt
              }
            }
            previewImage {
              fluid(quality: 100) {
                src
              }
            }
          }
        }
      }

      alphaDESC: allContentfulProducts(sort: { fields: title, order: DESC }) {
        edges {
          node {
            id
            slug
            title
            price
            description {
              childMarkdownRemark {
                excerpt
              }
            }
            previewImage {
              fluid(quality: 100) {
                src
              }
            }
          }
        }
      }

      priceASC: allContentfulProducts(sort: { fields: price, order: ASC }) {
        edges {
          node {
            id
            slug
            title
            price
            description {
              childMarkdownRemark {
                excerpt
              }
            }
            previewImage {
              fluid(quality: 100) {
                src
              }
            }
          }
        }
      }

      priceDESC: allContentfulProducts(sort: { fields: price, order: DESC }) {
        edges {
          node {
            id
            slug
            title
            price
            description {
              childMarkdownRemark {
                excerpt
              }
            }
            previewImage {
              fluid(quality: 100) {
                src
              }
            }
          }
        }
      }

      dateASC: allContentfulProducts(sort: { fields: slug, order: ASC }) {
        edges {
          node {
            id
            slug
            title
            price
            description {
              childMarkdownRemark {
                excerpt
              }
            }
            previewImage {
              fluid(quality: 100) {
                src
              }
            }
          }
        }
      }

      dateDESC: allContentfulProducts(sort: { fields: slug, order: DESC }) {
        edges {
          node {
            id
            slug
            title
            price
            description {
              childMarkdownRemark {
                excerpt
              }
            }
            previewImage {
              fluid(quality: 100) {
                src
              }
            }
          }
        }
      }
    }
  `)

  const { increaseProductCount } = useContext(CartContext)

  function handleAddProductToCart(product) {
    increaseProductCount(product)
  }

  return (
    <section className="ProductsSection | row mb-3">
      {data[filterOption].edges.map(({ node }) => (
        <div
          className={`ProductContainer | ${
            viewType === "grid"
              ? "col-xl-3 col-lg-4 col-sm-6"
              : "col-md-12 col-sm-6 d-flex flex-md-row flex-column"
          } text-decoration-none text-dark`}
          to={`/products/${node.slug}`}
          key={node.id}
        >
          {/* image */}
          <div
            className={`ProductImage | ${viewType} bgCover position-relative border`}
            style={{
              backgroundImage: `url(${node.previewImage.fluid.src})`,
            }}
          >
            <Link
              className="ProductOverlay | all-center h-100 w-100 position-absolute"
              to={`/products/${node.slug}`}
            >
              <FontAwesomeIcon
                className="d-lg-inline-block d-none text-white"
                size="2x"
                icon={faSearch}
              />
            </Link>
          </div>

          {/* detail */}
          <div
            className={`ProductDetail | ${viewType} d-flex flex-column w-100`}
          >
            {/* title */}
            <div className="Title">{node.title}</div>

            {/* description */}
            <div className="Description">
              {node.description.childMarkdownRemark.excerpt}
            </div>

            {/* price */}
            <div className="Price">RM{node.price}</div>

            {/* button */}
            <button
              className="Button | actionButton btn btn-outline-secondary btn-md"
              onClick={() => {
                handleAddProductToCart(node)
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </section>
  )
}

export default ProductsSection

import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

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
            className={`ProductImage ProductImage--${viewType} | position-relative border`}
            style={{
              backgroundImage: `url(${node.previewImage.fluid.src})`,
            }}
          >
            <Link
              className="h-100 w-100 position-absolute"
              to={`/products/${node.slug}`}
            ></Link>
          </div>

          {/* description */}
          <div
            className={`ProductDetail ${
              viewType === "list" && "ProductDetail--list"
            } | all-center-column w-100`}
          >
            <div className="ProductDetail__Title">{node.title}</div>

            {viewType === "list" && (
              <div className="">
                {node.description.childMarkdownRemark.excerpt}
              </div>
            )}

            <div className="my-3">RM{node.price}</div>

            <button className="btn btn-outline-secondary btn-md">
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </section>
  )
}

export default ProductsSection

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
        <Link
          className={`col-lg-${
            viewType === "grid" ? "6" : "12 d-flex flex-md-row flex-column"
          } mb-5 text-decoration-none text-dark`}
          style={{ height: "400px" }}
          to={`/products/${node.slug}`}
          key={node.id}
        >
          {/* image */}
          <div
            className="h-75 w-50 bg-dark"
            style={{
              backgroundImage: `url(${node.previewImage.fluid.src})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          ></div>

          {/* description */}
          <div className="text-center all-center justify-content-between w-100 mt-2">
            <span>{node.title}</span>

            <span>RM{node.price}</span>
          </div>
        </Link>
      ))}
    </section>
  )
}

export default ProductsSection

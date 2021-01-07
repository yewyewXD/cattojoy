import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

const ProductsSection = () => {
  const data = useStaticQuery(graphql`
    {
      products: allContentfulProducts {
        edges {
          node {
            id
            slug
            title
            price
            description {
              markdown: childMarkdownRemark {
                excerpt
              }
            }
            previewImage {
              fluid(quality: 100) {
                src
              }
            }
            slideImages {
              fluid(quality: 100) {
                src
              }
              fixed(quality: 100, width: 200) {
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
      {data.products.edges.map(({ node }) => (
        <Link
          className="col-lg-4 mb-5 text-decoration-none text-dark"
          style={{ height: "400px" }}
          to={`/products/${node.slug}`}
          key={node.id}
        >
          {/* image */}
          <div
            className="h-75 w-100 bg-dark"
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

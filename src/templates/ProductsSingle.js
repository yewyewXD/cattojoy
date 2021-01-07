import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout.jsx"
// import Img from "gatsby-image"
import SEO from "../components/seo"

export const data = graphql`
  query($slug: String!) {
    products: contentfulProducts(slug: { eq: $slug }) {
      title
      price
      description {
        childMarkdownRemark {
          excerpt
        }
      }

      previewImage {
        fluid(quality: 100) {
          ...GatsbyContentfulFluid
        }
      }

      slideImages {
        fluid(quality: 80) {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`

const ProductsSinglePage = props => {
  return (
    <Layout currentPage="shop">
      <SEO
        title={props.data.products.title}
        description={props.data.products.title}
      />

      <main className="ProductsSinglePage">
        {/* heading */}
        <div className="Heading | py-5">
          <div className="container">
            <h1>{props.data.products.title}</h1>
          </div>
        </div>
        {/* 
        <div className="container my-5">
          <Img
            fluid={props.data.products.image.fluid}
            alt={props.data.products.title}
          />

          <article className="mt-5">
            {documentToReactComponents(
              props.data.products.article.json,
              options
            )}
          </article>
        </div> */}

        {/* <div className="py-5 mb-5 mx-auto" style={{ width: "80%" }}>
          <div className="row justify-content-between">
            <div className="col-xl-9 pr-5">
              <Img
                fluid={props.data.products.image.fluid}
                alt={props.data.products.title}
              />

              <article className="bg-dark">
                {documentToReactComponents(
                  props.data.products.article.json,
                  options
                )}
              </article>
            </div>

            <div className="col-xl-3 p-0">
              <div className="bg-dark w-100 h-100"></div>
            </div>
          </div>
        </div> */}
      </main>
    </Layout>
  )
}

export default ProductsSinglePage

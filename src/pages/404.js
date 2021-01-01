import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import { Link, useStaticQuery, graphql } from "gatsby"

const NotFoundPage = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "404.png" }) {
        image: childImageSharp {
          fixed(quality: 60, width: 500) {
            src
          }
        }
      }
    }
  `)

  return (
    <Layout currentPage="404">
      <SEO title="404 Page Not Found" />
      <div className="NotFoundPage | all-center-column w-100">
        <h2 className="mb-4 text-center px-1">404 Page Not Found</h2>
        <img
          className="NotFoundPage__Image | mb-sm-5 mb-4"
          src={data.file.image.fixed.src}
          alt="404 Page Not Found"
        />
        <h1 className="NotFoundPage__Description | text-center px-1">
          Meow, it seems like you're lost
        </h1>
        <Link className="btn btn-secondary btn-lg mt-4" to="/">
          Back to Homepage
        </Link>
      </div>
    </Layout>
  )
}

export default NotFoundPage

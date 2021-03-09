import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import { Link, useStaticQuery, graphql } from "gatsby"

const SuccessPage = () => {
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
    <Layout currentPage="success">
      <SEO title="Success Page" />
      <main className="SuccessPage | all-center-column w-100">
        <h2 className="mb-4 text-center px-1">
          Thank you for reaching us out!
        </h2>
        <img
          className="SuccessPage__Image | mb-sm-5 mb-4"
          src={data.file.image.fixed.src}
          alt="404 Page Not Found"
        />

        <Link className="btn btn-secondary btn-lg mt-4" to="/">
          Back to Homepage
        </Link>
      </main>
    </Layout>
  )
}

export default SuccessPage

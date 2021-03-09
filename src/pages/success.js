import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import { Link, useStaticQuery, graphql } from "gatsby"

const SuccessPage = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "SuccessImages/catWithMail.png" }) {
        image: childImageSharp {
          fixed(quality: 50, width: 300) {
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
          className="SuccessPage__Image | mb-sm-3 mb-2"
          src={data.file.image.fixed.src}
          alt="Cat mail by Denis Sazhin from the Noun Project"
        />

        <Link className="btn btn-secondary btn-lg mt-4" to="/">
          Back to Homepage
        </Link>
      </main>
    </Layout>
  )
}

export default SuccessPage

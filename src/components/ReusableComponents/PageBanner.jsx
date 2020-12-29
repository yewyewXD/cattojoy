import React from "react"

import { useStaticQuery, graphql } from "gatsby"

const Banner = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "cat.png" }) {
        childImageSharp {
          fixed(quality: 70, width: 90) {
            src
          }
        }
      }
    }
  `)

  return <div className="PageBanner"></div>
}

export default Banner

import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import BackgroundImage from "gatsby-background-image"

export default function HeroSection() {
  const data = useStaticQuery(graphql`
    query {
      images: file(relativePath: { eq: "default-background.jpeg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <BackgroundImage Tag="section" fluid={data.images.childImageSharp.fluid}>
      <h2 style={{ height: "100vh" }}>gatsby-background-image</h2>
    </BackgroundImage>
  )
}

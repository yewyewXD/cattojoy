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
      <section className="Hero all-center">
        <div className="Hero__caption text-center">
          <div className="Hero__caption__title heading text-capitalize mb-2">
            welcome to catto joy
          </div>
          <div className="Hero__caption__subtitle">
            Bring the best joy to your kitty with our innovative cat toys
          </div>
          <button className="btn btn-primary btn-lg mt-4">Discover now</button>
        </div>
      </section>
    </BackgroundImage>
  )
}

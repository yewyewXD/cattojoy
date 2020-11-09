import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import BackgroundImage from "gatsby-background-image"

export default function HeroSection() {
  const data = useStaticQuery(graphql`
    query {
      images: file(relativeDirectory: { eq: "HomeImages" }) {
        childImageSharp {
          fluid(quality: 70, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <BackgroundImage Tag="section" fluid={data.images.childImageSharp.fluid}>
      <div className="Hero__BgOverlay">
        <section className="Hero all-center">
          <div className="Hero__Caption text-center">
            <h1 className="Hero__Caption__Title heading mb-2">
              Welcome to Catto Joy
            </h1>
            <h2 className="Hero__Caption__Subtitle">
              Bring the best joy to your kitty with our innovative cat toys
            </h2>
            <button className="btn btn-primary btn-lg mt-4">
              Discover now
            </button>
          </div>
        </section>
      </div>
    </BackgroundImage>
  )
}

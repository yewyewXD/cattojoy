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
    <div className="HeroSection">
      <BackgroundImage
        Tag="section"
        className="BgImage"
        fluid={data.images.childImageSharp.fluid}
      >
        <div className="BgOverlay">
          <div className="CaptionContainer all-center">
            {/* caption */}
            <div className="Caption | text-center text-white">
              <h1 className="Caption__Title | heading mb-2">
                Welcome to Catto Joy
              </h1>
              <h2 className="Caption__Subtitle">
                Bring the best joy to your kitty with our innovative cat toys
              </h2>
              <button className="btn btn-primary btn-lg mt-4">
                Discover now
              </button>
            </div>
          </div>
        </div>
      </BackgroundImage>
    </div>
  )
}

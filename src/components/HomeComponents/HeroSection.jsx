import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import BackgroundImage from "gatsby-background-image"

const HeroSection = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "HomeImages/hero_bg.jpg" }) {
        image: childImageSharp {
          fluid(quality: 70, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <section className="HeroSection">
      <BackgroundImage
        Tag="section"
        className="BgImage"
        fluid={data.file.image.fluid}
      >
        <div className="BgOverlay"></div>
        <div className="CaptionContainer | container all-center">
          {/* caption */}
          <div className="Caption | text-center text-white">
            <h1 className="Caption__Title | heading mb-1">
              Welcome to Catto Joy
            </h1>
            <div className="Caption__Subtitle">
              Joy for your cats, joy for you!
            </div>
            <Link
              to="/shop"
              className="ActionButton | btn btn-primary btn-lg mt-4"
            >
              Discover now
            </Link>
          </div>
        </div>
      </BackgroundImage>
    </section>
  )
}

export default HeroSection

import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const FeatureSection = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: { relativeDirectory: { eq: "HomeImages/FeatureImages" } }
        sort: { fields: name }
      ) {
        edges {
          node {
            image: childImageSharp {
              fixed(quality: 100, width: 110) {
                src
              }
            }
          }
        }
      }
    }
  `)

  const { edges } = data.allFile

  const featureCols = [
    {
      title: "Affordable",
      description:
        "We sell every toy at the wholesale price. Cat toys shouldn't be expensive, let's fix that!",
    },

    {
      title: "Transparent",
      description:
        "No extra fee is needed upon checkout. We will even walk you through how we monetize you!",
    },
    {
      title: "Reliable",
      description:
        "Our private carriage ensure your order's safety. You would never see a broken package!",
    },
    {
      title: "Fast Delivery",
      description:
        "We ship out every weekend. So if you purchase on Friday, you will receive your order in only 2 days!",
    },
  ]

  return (
    <section className="FeatureSection | py-5 my-md-5 my-3">
      <div className="container">
        <h2 className="heading text-center mb-3">Some Values We Provide</h2>
        <div className="subheading text-center">
          We are on a mission to selling cat toys to cat owners at the cheapest
          price possible, aka. wholesale price!
        </div>
      </div>

      <div className="container">
        <div className="row mt-lg-5">
          {featureCols.map((featureCol, index) => (
            <div
              className="col-lg-3 mt-lg-0 mt-4 pt-3 all-center-column justify-content-start"
              key={`homeFeature-${index}`}
            >
              <img
                className="SectionImage"
                src={edges[index].node.image.fixed.src}
                alt={featureCol.title}
              />
              <div className="heading subheading mt-lg-4 mt-md-3 mt-2 mb-md-2 mb-sm-1">
                {featureCol.title}
              </div>
              <div className="text-center">{featureCol.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeatureSection

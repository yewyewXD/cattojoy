import React from "react"
import { graphql, useStaticQuery } from "gatsby"

export default function FeatureSection() {
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
      title: "safe",
      description: "designed to avoid hurting pets",
      imgAlt: "safe cat toy",
    },
    {
      title: "non-chemical",
      description: "made with chewable materials",
      imgAlt: "non-toxic cat toy",
    },
    {
      title: "affordable",
      description: "aligned with the best market prices",
      imgAlt: "cheap cat toy",
    },
    {
      title: "fast Delivery",
      description: "reach your place on time",
      imgAlt: "reliable cat toy delivery",
    },
  ]

  return (
    <section className="Feature py-5 my-5">
      <div className="Feature__headline">
        <div className="Feature__headline__heading heading text-center text-capitalize h1 mb-3">
          We provide high quality toy
        </div>
        <div className="Feature__headline__subheading text-center">
          Shipping good toys and ensuring your cat's health and happiness are
          what we love and so passionate about.
        </div>
      </div>

      <div className="Feature__row row mt-5">
        {featureCols.map((featureCol, index) => (
          <div
            className="Feature__row__item col-md-3 all-center-column"
            key={index}
          >
            <img
              src={edges[index].node.image.fixed.src}
              alt={featureCol.imgAlt}
              className="Feature__row__item__image"
            />
            <div className="Feature__row__item__title heading mt-4 mb-2 text-capitalize">
              {featureCol.title}
            </div>
            <div className="Feature__row__item__subtitle text-center text-capitalize">
              {featureCol.description}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

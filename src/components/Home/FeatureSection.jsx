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
    <section className="FeatureSection py-5 my-sm-5 my-3">
      <div className="container">
        <h2 className="heading text-center mb-3">
          We Provide High Quality Toy
        </h2>
        <div className="text-center">
          Shipping good toys and ensuring your cat's health and happiness are
          what we love and so passionate about.
        </div>
      </div>

      <div className="Feature__row row mt-5">
        {featureCols.map((featureCol, index) => (
          <div className="col-md-3 all-center-column" key={index}>
            <img
              src={edges[index].node.image.fixed.src}
              alt={featureCol.imgAlt}
              className=""
            />
            <div className="heading mt-4 mb-2 text-capitalize">
              {featureCol.title}
            </div>
            <div className="text-center text-capitalize">
              {featureCol.description}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default FeatureSection

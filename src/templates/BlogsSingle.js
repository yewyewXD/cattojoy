import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Layout from "../components/Layout.jsx"
import SEO from "../components/seo"
import BackgroundImage from "gatsby-background-image"

export const data = graphql`
  query($slug: String!) {
    contentfulBlogs(slug: { eq: $slug }) {
      title
      date(formatString: "DD MMMM YYYY")
      image {
        fluid(maxWidth: 1600) {
          ...GatsbyContentfulFluid
        }
      }
      article {
        json
      }
    }
  }
`

const BlogsSinglePage = props => {
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const alt = node.data.target.fields.title["en-US"]
        const url = node.data.target.fields.file["en-US"].url
        return <img alt={alt} src={url} />
      },
    },
  }
  return (
    <Layout currentPage="blogs">
      <SEO
        title={props.data.contentfulBlogs.title}
        description={props.data.contentfulBlogs.title}
      />

      <main className="BlogsSinglePage">
        {/* heading */}
        <div className="Heading | py-5">
          <div className="container">
            <h2 className="heading">{props.data.contentfulBlogs.title}</h2>
            <span className="meta">
              Posted on {props.data.contentfulBlogs.date}
            </span>
          </div>
        </div>

        <div className="ArticleContainer">
          <div className="container py-5">
            <BackgroundImage
              className="ArticleContainer__Image"
              fluid={props.data.contentfulBlogs.image.fluid}
              alt={props.data.contentfulBlogs.title}
            />

            <article className="mt-5">
              {documentToReactComponents(
                props.data.contentfulBlogs.article.json,
                options
              )}
            </article>
          </div>
        </div>

        {/* <div className="py-5 mb-5 mx-auto" style={{ width: "80%" }}>
          <div className="row justify-content-between">
            <div className="col-xl-9 pr-5">
              <Img
                fluid={props.data.contentfulBlogs.image.fluid}
                alt={props.data.contentfulBlogs.title}
              />

              <article className="bg-dark">
                {documentToReactComponents(
                  props.data.contentfulBlogs.article.json,
                  options
                )}
              </article>
            </div>

            <div className="col-xl-3 p-0">
              <div className="bg-dark w-100 h-100"></div>
            </div>
          </div>
        </div> */}
      </main>
    </Layout>
  )
}

export default BlogsSinglePage

import React from "react"
import { graphql, Link } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Layout from "../components/Layout.jsx"
import Img from "gatsby-image"
import SEO from "../components/seo"

export const data = graphql`
  query($slug: String!) {
    contentfulBlogs(slug: { eq: $slug }) {
      title
      date(formatString: "DD MMMM YYYY")
      image {
        fluid(maxWidth: 750) {
          ...GatsbyContentfulFluid
        }
      }
      article {
        json
      }
    }
  }
`

const BlogTemplate = props => {
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
    <Layout>
      <SEO title={props.data.contentfulBlogs.title} />
      <Link to="/blog/">Visit the Blog Page</Link>
      <div className="content">
        <h1>{props.data.contentfulBlogs.title}</h1>
        <span className="meta">
          Posted on {props.data.contentfulBlogs.date}
        </span>

        {props.data.contentfulBlogs.image && (
          <Img
            className="featured"
            fluid={props.data.contentfulBlogs.image.fluid}
            alt={props.data.contentfulBlogs.title}
          />
        )}

        <div className="container">
          {documentToReactComponents(
            props.data.contentfulBlogs.article.json,
            options
          )}
        </div>
      </div>
    </Layout>
  )
}

export default BlogTemplate

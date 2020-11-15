import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
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
    }
  }
`

const BlogTemplate = props => {
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
      </div>
    </Layout>
  )
}

export default BlogTemplate

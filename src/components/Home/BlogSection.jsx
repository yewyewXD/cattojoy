import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

export default function BlogSection() {
  const data = useStaticQuery(graphql`
    {
      blogs: allContentfulBlogs(sort: { fields: date, order: DESC }) {
        edges {
          node {
            id
            title
            slug
            date(formatString: "DD MMMM YYYY")
            image {
              fluid {
                src
              }
            }
            article: previewedArticle {
              markdown: childMarkdownRemark {
                excerpt(pruneLength: 200)
              }
            }
          }
        }
      }
    }
  `)
  return (
    <section className="Blog py-5 my-5">
      <div className="Blog__headline">
        <div className="Blog__headline__heading Heading text-center text-capitalize h1 mb-3">
          from our blog
        </div>
        <div className="Blog__headline__subheading text-center">
          Here are some extra tips to teach you how to build a healthy
          relationship with your cats.
        </div>
      </div>

      <div className="container">
        <div className="Blog__row row mt-5">
          {data.blogs.edges.map(blog => (
            <div
              className="Blog__row__item col-lg-4 all-center"
              key={blog.node.id}
            >
              <div className="card">
                <img
                  className="card-img-top card__image"
                  src={blog.node.image.fluid.src}
                  alt="How to Get Your Cat to Play By Itself"
                />
                <div className="Blog__card card-body p-4">
                  <div className="Blog__row__item__title mb-3">
                    {blog.node.title}
                  </div>
                  <div className="Blog__row__item__subtitle mb-3">
                    {blog.node.article.markdown.excerpt}
                  </div>
                  <Link
                    to={`/blog/${blog.node.slug}`}
                    className="btn btn-outline-secondary btn-md"
                  >
                    Read more
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

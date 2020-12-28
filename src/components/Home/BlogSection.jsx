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
    <section className="BlogSection | py-5 my-md-5 my-3">
      <div className="container">
        <h2 className="heading text-center mb-3">From Our Blog</h2>
        <div className="text-center">
          Here are some extra tips to teach you how to build a healthy
          relationship with your cats.
        </div>
      </div>

      <div className="container">
        <div className="row mt-5">
          {data.blogs.edges.map(blog => {
            return (
              <div
                className="col-lg-4 all-center align-items-start"
                key={blog.node.id}
              >
                <div className="card">
                  <div
                    style={{
                      height: "200px",
                      width: "100%",
                      background: `url(${blog.node.image.fluid.src})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "none",
                    }}
                  ></div>
                  {/* <img
                  className="card-img-top"
                  src={blog.node.image.fluid.src}
                  alt="How to Get Your Cat to Play By Itself"
                /> */}
                  <div className="card-body p-4">
                    <div className="mb-3">{blog.node.title}</div>
                    <div className="mb-3">
                      {blog.node.article.markdown.excerpt.length > 150
                        ? blog.node.article.markdown.excerpt
                            .split(" ")
                            .slice(0, 30)
                            .join(" ") + "..."
                        : blog.node.article.markdown.excerpt}
                    </div>
                    <Link
                      to={`/blogs/${blog.node.slug}`}
                      className="btn btn-outline-secondary btn-md"
                    >
                      Read more
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

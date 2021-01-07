const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const res = await graphql(`
    {
      blogs: allContentfulBlogs {
        edges {
          node {
            slug
          }
        }
      }
      products: allContentfulProducts {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  res.data.blogs.edges.forEach(edge => {
    createPage({
      path: `/blogs/${edge.node.slug}`,
      component: path.resolve("./src/templates/BlogsSingle.js"),
      context: {
        slug: edge.node.slug,
      },
    })
  })

  res.data.products.edges.forEach(edge => {
    createPage({
      path: `/products/${edge.node.slug}`,
      component: path.resolve("./src/templates/ProductsSingle.js"),
      context: {
        slug: edge.node.slug,
      },
    })
  })
}

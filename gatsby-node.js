const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const res = await graphql(`
    query {
      allContentfulBlogs {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  res.data.allContentfulBlogs.edges.forEach(edge => {
    createPage({
      path: `/blogs/${edge.node.slug}`,
      component: path.resolve("./src/templates/BlogsSingle.js"),
      context: {
        slug: edge.node.slug,
      },
    })
  })
}

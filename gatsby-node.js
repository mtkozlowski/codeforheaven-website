const path = require(`path`)
const _ = require("lodash")

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    node: {
      fs: 'empty'
    }
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  const nodeInternalType = _.get(node, "internal.type");

  if (nodeInternalType === `MarkdownRemark` || nodeInternalType === 'Mdx') {
    const parent = getNode(_.get(node, "parent"))

    createNodeField({
      node,
      name: "collection",
      value: _.get(parent, "sourceInstanceName"),
    })

  }
}

exports.createPages = async ({ actions, graphql, reporter }) => {
  const results = await graphql(`
    {
      allMdx(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            fields {
              collection
            }
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)

  // Handle errors
  if (results.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const { createPage } = actions

  const allEdges = results.data.allMdx.edges
  const blogEdges = allEdges.filter(
    edge => edge.node.fields.collection === `posts`
  )
  const pageEdges = allEdges.filter(
    edge => edge.node.fields.collection === `pages`
  )

  _.each(blogEdges, (edge, index) => {
    const previous =
      index === blogEdges.length - 1 ? null : blogEdges[index + 1].node
    const next = index === 0 ? null : blogEdges[index - 1].node

    createPage({
      path: `/${edge.node.frontmatter.slug}`,
      component: path.resolve("./src/style/templates/blogTemplate.js"),
      context: {
        slug: edge.node.frontmatter.slug,
        previous,
        next,
      },
    })
  })

  _.each(pageEdges, (edge, index) => {
    createPage({
      path: `/${edge.node.frontmatter.slug}`,
      component: path.resolve(`./src/style/templates/pageTemplate.js`),
      context: {
        slug: edge.node.frontmatter.slug,
      },
    })
  })
}

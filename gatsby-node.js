const path = require(`path`)
const slugify = require("slugify")

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    node: {
      fs: "empty",
    },
  })
}

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const results = await graphql(`
    {
      allDatoCmsArticle {
        nodes {
          id
          title
        }
      }
      allDatoCmsPage {
        nodes {
          id
          title
        }
      }
      allMdx(filter: { frontmatter: { date: { ne: null } } }) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)

  const cmsArticles = results.data.allDatoCmsArticle.nodes.map(el => ({
    slug: slugify(el.title, { lower: true, strict: true }),
    id: el.id,
  }))

  cmsArticles.forEach(edge => {
    createPage({
      path: `/${edge.slug}`,
      component: path.resolve(`./src/style/templates/articleTemplate.js`),
      context: {
        id: edge.id,
      },
    })
  })

  const cmsPages = results.data.allDatoCmsPage.nodes.map(el => ({
    slug: slugify(el.title, { lower: true, strict: true }),
    id: el.id,
  }))

  cmsPages.forEach(edge => {
    createPage({
      path: `/${edge.slug}`,
      component: path.resolve(`./src/style/templates/pageTemplate.js`),
      context: {
        id: edge.id,
      },
    })
  })

  const blogEdges = results.data.allMdx.edges
  blogEdges.forEach(edge => {
    createPage({
      path: `/${edge.node.frontmatter.slug}`,
      component: path.resolve("./src/style/templates/blogTemplate.js"),
      context: {
        slug: edge.node.frontmatter.slug,
      },
    })
  })
}

const path = require('path')
const { graphql } = require('gatsby')

module.exports.onCreateNode = ({node, actions}) => {
    const {createNodeField} = actions

    if (node.internal.type === 'MarkdownRemark') {
        const slug = path.basename(node.fileAbsolutePath, '.md')
        createNodeField({
            node,
            name: 'slug',
            value: slug
        })
    }
}
//async---await, make a promise api more unsyncronous
module.exports.createPages = async ({ graphql, actions }) => {
    const {createPage} = actions
    const blogTemplate = path.resolve('./src/templates/blog.js')
    const res = await graphql(`
    query{
        allMarkdownRemark{
            edges{
                node{
                    fields{
                        slug
                    }
                }
            }
        }
    }`
   )

          res.data.allMarkdownRemark.edges.forEach((edge)=> {
          createPage({
              component: blogTemplate,
              path: `/blog/${edge.node.fields.slug}`,
              context: {
                  slug: edge.node.fields.slug
              }
          })
})
}

// const path = require(`path`)

// module.exports.onCreateNode = ({node, actions}) => {
//     const {createNodeField} = actions

//     if (node.internal.type === 'MarkdownRemark') {
//         const slug = path.basename(node.fileAbsolutePath, '.md')
//         createNodeField({
//             node,
//             name: 'slug',
//             value: slug
//         })
//     }
// }

// exports.createPages = ({ graphql, actions }) => {
//   const { createPage } = actions
//   const blogPostTemplate = path.resolve(`src/templates/blog-post.js`)
//   // Query for markdown nodes to use in creating pages.
//   // You can query for whatever data you want to create pages for e.g.
//   // products, portfolio items, landing pages, etc.
//   // Variables can be added as the second function parameter
//   return graphql(`
//     query loadPagesQuery  {
//       allMarkdownRemark{
//         edges {
//           node {
//             fields {
//               slug
//             }
//           }
//         }
//       }
//     }
//   `, { limit: 1000 }).then(result => {
//     if (result.errors) {
//       throw result.errors
//     }
//     // Create blog post pages.
//     result.data.allMarkdownRemark.edges.forEach(edge => {
//       createPage({
//         // Path for this page — required
//         path: `/blog/{edge.node.fields.slug}`,
//         component: blogPostTemplate,
//         context: {
//             slug: edge.node.fields.slug
//           // Add optional context data to be inserted
//           // as props into the page component..
//           //
//           // The context data can also be used as
//           // arguments to the page GraphQL query.
//           //
//           // The page "path" is always available as a GraphQL
//           // argument.
//         },
//       })
//     })
//   })
// }


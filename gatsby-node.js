/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

module.exports = {
  createPages: require('./gatsby/createPages'),
  onCreateNode: require('./gatsby/onCreateNode'),
  onCreateBabelConfig: ({ actions }) => {
    actions.setBabelPlugin({
      name: 'babel-plugin-import',
      options: {
        libraryName: 'antd',
        style: true,
      },
    })
  },
}

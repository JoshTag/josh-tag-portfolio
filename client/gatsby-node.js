exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    {
      allConfigJson {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  if (result.error) {
    reporter.panic("There was a problem Loading your project")
    return
  }

  const projects = result.data.allConfigJson.edges

  projects.forEach(({ node: { slug } }) => {
    actions.createPage({
      path: `/${slug}`,
      component: require.resolve('./src/templates/project.js'),
      context: { slug },
    })
  })
}

// This file exports a function that creates pages programmatically 
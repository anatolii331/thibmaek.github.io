const path = require(`path`);
const createPaginatedPages = require(`gatsby-paginate`);

const postTemplate = path.resolve(`./src/templates/post.jsx`);

exports.createPages = ({ graphql, boundActionCreators: { createPage } }) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { errors, data } = await graphql(`
        {
          allContentfulPost(
            limit: 1000,
            sort: { fields: [date], order: DESC }
          ) {
            edges {
              node {
                id
                slug
                date
                id
                slug
                summary
                tags
                title
                body {
                  childMarkdownRemark {
                    excerpt
                    timeToRead
                  }
                }
              }
            }
          }
        }
      `);

      if (errors) reject(errors);

      createPaginatedPages({
        edges: data.allContentfulPost.edges,
        createPage: createPage,
        pageTemplate: `src/templates/index.js`,
        pageLength: 10, // This is optional and defaults to 10 if not used
        pathPrefix: ``, // This is optional and defaults to an empty string if not used
        context: {}, // This is optional and defaults to an empty object if not used
      });

      data.allContentfulPost.edges.forEach(({ node: { id, slug } }) => {
        createPage({
          component: postTemplate,
          context: {
            id, slug,
          },
          path: `/post/${slug}/`,
        });
      });

      resolve();
    } catch (e) {
      console.error(e);
      reject(e);
    }
  });
};

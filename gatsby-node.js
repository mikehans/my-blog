/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path');

exports.createPages = async ({graphql, actions}) => {
    const {createPage} = actions;

    const result = await graphql(`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        id
                        frontmatter {
                            author
                            date
                            path
                            type
                            title
                        }
                    }
                }
            }
        }
    `);

    const posts = result.data.allMarkdownRemark.edges.filter(({node}) => {
        return node.frontmatter.type === 'post';
    });

    
    const pages = result.data.allMarkdownRemark.edges.filter(({node}) => {
        return node.frontmatter.type === 'page';
    });

    posts.forEach(node => {
        createPage({
            path: node.node.frontmatter.path,
            component: path.resolve('./src/templates/blog-post.js')
        });
    });

    pages.forEach(node => {
        createPage({
            path: node.node.frontmatter.path,
            component: path.resolve('./src/templates/page.js')
        });
    });
}
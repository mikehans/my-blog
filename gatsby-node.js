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

    const projects = result.data.allMarkdownRemark.edges.filter(({node}) => {
        return node.frontmatter.type === 'project';
    });

    const interests = result.data.allMarkdownRemark.edges.filter(({node}) => {
        return node.frontmatter.type === 'interests';
    });

    posts.forEach(node => {
        createPage({
            path: node.node.frontmatter.path,
            component: path.resolve('./src/templates/Blog-post.js')
        });
    });

    pages.forEach(node => {
        createPage({
            path: node.node.frontmatter.path,
            component: path.resolve('./src/templates/page.js')
        });
    });

    projects.forEach(node => {
        createPage({
            path: node.node.frontmatter.path,
            component: path.resolve('./src/templates/Project.js')
        });
    });

    interests.forEach(node => {
        createPage({
            path: node.node.frontmatter.path,
            component: path.resolve('./src/templates/Project.js')
        });
    });
}
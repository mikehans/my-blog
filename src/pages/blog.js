import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"

function BlogPage ({data}) {
 
    return (
        <Layout>
            <h2>Latest Posts</h2>
            {data.allMarkdownRemark.edges.map(post => (
                <div key={post.node.id}>
                    <h3>{post.node.frontmatter.title}</h3>
                    <small>Posted by {post.node.frontmatter.author} on {post.node.frontmatter.date}</small>
                    <br />
                    <br />
                    <Link to={post.node.frontmatter.path}>Read more</Link>
                    <br />
                    <br />
                    <hr />
                </div>
            ))}

        </Layout>
    )
}

export const pageQuery = graphql`
    query BlogIndexQuery {
        allMarkdownRemark(filter: {fileAbsolutePath: {glob: "**/posts/**"}}, sort: {fields: frontmatter___date, order: DESC}) {
            edges {
              node {
                id
                frontmatter {
                  author
                  date
                  path
                  title
                }
              }
            }
          }
    }
`

export default BlogPage

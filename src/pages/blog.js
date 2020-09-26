import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Tags from "../components/tags"
// import Image from "../components/image"
// import SEO from "../components/seo"

function BlogPage ({data}) {
    let edges = data.allMarkdownRemark.edges;
    
    let allTags = [];
    edges.forEach(ele => {
        const t = ele.node.frontmatter.tags;
        t.forEach(e => allTags.push(e));
    });

    allTags.sort();

    let distinctTags = new Set(allTags);

    return (
        <Layout>
            <h1>Latest Posts</h1>
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

            <h1>Tags</h1>
            <Tags list={distinctTags} />

        </Layout>
    )
}

export const pageQuery = graphql`
    query BlogIndexQuery {
        allMarkdownRemark(sort: {fields: frontmatter___date}) {
            edges {
              node {
                id
                frontmatter {
                  author
                  date
                  path
                  title
                  tags
                }
              }
            }
          }
    }
`

export default BlogPage

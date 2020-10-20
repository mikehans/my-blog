import React from 'react';
import {Link} from 'gatsby';
import Layout from "../components/layout"

export default function Template({data}){
    const post = data.markdownRemark;

    return (
        <Layout>
            <h1>{post.frontmatter.title}</h1>
            <strong>Posted by {post.frontmatter.author} on {post.frontmatter.date}</strong>
            <div dangerouslySetInnerHTML={{__html: post.html}}></div>
        </Layout>
    )
}

export const postQuery = graphql`
    query BlogPostByPath($path: String!) {
        markdownRemark(frontmatter: {path: { eq: $path }}, fileAbsolutePath: {glob: "**/posts/**"}){
            html
            frontmatter {
                path
                title
                author
                date
                tags
            }
        }
    }
`


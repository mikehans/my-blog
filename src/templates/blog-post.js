import React from 'react';
import {Link} from 'gatsby';
import Layout from "../components/layout";
import dateFormatter from '../components/utilities/dateFormatter';
import './blog-post.css'

export default function BlogPostTemplate({data}){
    const post = data.markdownRemark;

    return (
        <Layout>
            <h1>{post.frontmatter.title}</h1>
            <div className="postByline">Posted by {post.frontmatter.author} on {dateFormatter(post.frontmatter.date, 'long')}</div>
            <div className="backLink"><Link to="/blog">Back</Link></div>
            <div className="postBody" dangerouslySetInnerHTML={{__html: post.html}}></div>
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


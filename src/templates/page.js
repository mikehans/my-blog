import React from 'react';
import {Link} from 'gatsby';
import Layout from "../components/layout";
import dateFormatter from '../components/utilities/dateFormatter';
// import './blog-post.css'

export default function PageTemplate({data}){
    const page = data.markdownRemark;

    return (
        <Layout>
            <h1>{page.frontmatter.title}</h1>
            <div className="pageBody" dangerouslySetInnerHTML={{__html: page.html}}></div>
        </Layout>
    )
}

export const postQuery = graphql`
    query PageByPath($path: String!) {
        markdownRemark(frontmatter: {path: { eq: $path }}){
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


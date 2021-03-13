import React, { useEffect } from 'react';
import { Link } from 'gatsby';
import Layout from "../components/layout";
import dateFormatter from '../components/utilities/dateFormatter';
import styles from './Project.module.css';

export default function BlogPostTemplate({ data }) {

    useEffect(() => {
        document.body.classList.add('hasBackgroundImage');
    });

    const post = data.markdownRemark;

    return (
        <Layout>
            <div className={styles.content}>
                <section className={styles.contentSection}>
                    <div className={styles.contentSectionInner}>

                        <h1>{post.frontmatter.title}</h1>
                        {/* <div className={styles.postByline}>Posted by {post.frontmatter.author} on {dateFormatter(post.frontmatter.date, 'long')}</div>
                        <div className={styles.backLink}><Link to="/blog">Back</Link></div> */}
                        <div className={styles.postBody} dangerouslySetInnerHTML={{ __html: post.html }}></div>

                    </div>
                </section>
            </div>
        </Layout>
    )
}

export const postQuery = graphql`
    query ProjectByPath($path: String!) {
        markdownRemark(frontmatter: {path: { eq: $path }}, fileAbsolutePath: {glob: "**/projects/**"}){
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


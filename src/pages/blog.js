import React, { useEffect } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import dateFormatter from '../components/utilities/dateFormatter';
import blogStyles from './Blog.module.css'
import styles from './reactPage.module.css'

function BlogPage({ data }) {

  useEffect(() => {
    document.body.classList.add('hasBackgroundImage');
  });

  return (
    <Layout>
      <SEO title="Blog" />

      <div className={styles.content}>
        <section className={styles.contentSection}>
          <div className={styles.contentSectionInner}>
            
            <h2>Latest Posts</h2>

            <div className={blogStyles.cards}>
              {data.allMarkdownRemark.edges.map(post => (
                <div key={post.node.id} className={blogStyles.card}>
                  <h3 className={blogStyles.blogPostTitle}>{post.node.frontmatter.title}</h3>
                  <div className={blogStyles.blogSummary}>
                    <div className={blogStyles.blogPostDate}>{dateFormatter(post.node.frontmatter.date, 'long')}</div>
                    <div className={blogStyles.blogByline}>{post.node.frontmatter.author} </div>
                    <div className={blogStyles.blogReadMore}><Link to={post.node.frontmatter.path}>Read more...</Link></div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>
      </div>

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

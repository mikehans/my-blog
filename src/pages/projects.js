import React, { useEffect } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import dateFormatter from '../components/utilities/dateFormatter';
import projectStyles from './Projects.module.css'
import styles from './reactPage.module.css'

function ProjectPage({ data }) {

  // useEffect(() => {
  //   document.body.classList.add('hasBackgroundImage');
  // });

  return (
    <Layout>
      <SEO title="Projects" />

      <div className={styles.content}>
        <section className={styles.contentSection}>
          <div className={styles.contentSectionInner}>
            
            <h2>Projects</h2>
            Here you'll find discussion, code and running examples of tech projects I've undertaken.

            <div className={projectStyles.cards}>
              {data.allMarkdownRemark.edges.map(post => (
                <div key={post.node.id} className={projectStyles.card}>
                  <h3 className={projectStyles.blogPostTitle}>{post.node.frontmatter.title}</h3>
                  <div className={projectStyles.blogSummary}>
                    <div className={projectStyles.blogPostDate}>{dateFormatter(post.node.frontmatter.date, 'long')}</div>
                    <div className={projectStyles.blogByline}>{post.node.frontmatter.author} </div>
                    <div className={projectStyles.blogReadMore}><Link to={post.node.frontmatter.path}>Read more...</Link></div>
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
    query ProjectIndexQuery {
        allMarkdownRemark(filter: {fileAbsolutePath: {glob: "**/projects/**"}}, sort: {fields: frontmatter___date, order: DESC}) {
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

export default ProjectPage

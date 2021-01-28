import React, { useEffect } from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import DevLogEntry from "../components/DevLog"
import styles from './reactPage.module.css'

function DevLogPage({ data }) {

  useEffect(() => {
    document.body.classList.add('hasBackgroundImage');
  });

  return (
    <Layout>
      <SEO title="Site Development" />

      <div className={styles.content}>
        <section className={styles.contentSection}>
          <div className={styles.contentSectionInner}>
            <h2>Site Development</h2>
            <section className="devLog">
              {data.allMarkdownRemark.edges.map(post => (
                <DevLogEntry {...post} />
              ))}
            </section>
          </div>
        </section>
      </div>





    </Layout>
  )
}

export const pageQuery = graphql`
    query SiteLogQuery {
        allMarkdownRemark(filter: {frontmatter: {publish: {eq: true}}, fileAbsolutePath: {glob: "**/log/**"}}, sort: {fields: frontmatter___date, order: DESC}) {
            edges {
              node {
                id
                html
                frontmatter {
                  author
                  date
                  title
                  publish
                }
              }
            }
          }
    }
`

export default DevLogPage

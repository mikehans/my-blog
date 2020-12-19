import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import DevLogEntry from "../components/devLog"

function DevLogPage ({data}) {
 
    return (
        <Layout>
            <SEO title="Site Development" />
            <h2>Site Development</h2>

            <section className="devLog">
              {data.allMarkdownRemark.edges.map(post => (
                  <DevLogEntry {...post} />
              ))}
            </section>


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

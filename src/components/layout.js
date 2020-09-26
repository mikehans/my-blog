/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import Menu from './menu'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="wrapper">
      {/* <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <Menu /> */}
      <header className="mainHeader">
        <h1> Site Heading</h1>
        <nav>
          <span>Home</span>
          <span>About</span>
          <span>Blog</span>
          <span>Contact Us</span>
        </nav>
      </header>

      <div className="container">
        <main className="content">{children}</main>
        <aside class="additionalNav">
                <nav class="tags">Tags</nav>
                <nav class="archive">Archive</nav>
			  </aside>
        <section class="leftNonContentSection"></section>
      </div>

      <footer className="mainFooter">
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

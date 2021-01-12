/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./Header"
import "./layout.css"
import SideNav from './sideNav'
import Footer from './footer'

const Layout = ({ children }) => {


  return (
    <StaticQuery 
      query={graphql `
        query SiteBriefQuery {
          site {
            siteMetadata {
              title
              description
              author
              subtitle
            }
          }
        }
      `}
      render={data => (
        <div className="flex-wrapper">
          <Header 
            siteTitle={data.site.siteMetadata?.title || `Title`}
            subTitle={data.site.siteMetadata?.subtitle || `Subtitle` } />
    
          <div className="main container">
            <main className="content">{children}</main>
            {/* <SideNav /> */}
            {/* <section className="leftNonContentSection"></section> */}
          </div>
    
          <Footer />
        </div>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

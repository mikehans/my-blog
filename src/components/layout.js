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
import Banner from './Banner'
import ContentSectionList from './ContentSectionList'
import "./layout.css"
// import SideNav from './sideNav'
import Footer from './Footer'

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
			  twitter
			  linkedIn
            }
          }
        }
      `}
      render={data => (
        <div className="flex-wrapper">
          <Header 
            siteTitle={data.site.siteMetadata?.title || `Title`}
            subTitle={data.site.siteMetadata?.subtitle || `Subtitle` } />
    
          <Banner 
            siteTitle={data.site.siteMetadata?.title || `Title`}
            subTitle={data.site.siteMetadata?.subtitle || `Subtitle` } />
          
          <section className="main container">
            <main className="content">{children}</main>

          </section>
		  <Footer 
		  	Twitter={data.site.siteMetadata?.twitter || `A Twitter URL`} 
			LinkedIn={data.site.siteMetadata?.linkedIn || `Some LinkedIn`} />
        </div>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

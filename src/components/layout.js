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
          
          
          {/* <div className="main container">
          </div> */}
          <section className="main container">
            <main className="content">{children}</main>
            {/* <ContentSectionList /> */}

							{/* <section id="four" class="wrapper alt style1">
								<div class="inner">
									<h2 class="major">Vitae phasellus</h2>
									<p>Cras mattis ante fermentum, malesuada neque vitae, eleifend erat. Phasellus non pulvinar erat. Fusce tincidunt, nisl eget mattis egestas, purus ipsum consequat orci, sit amet lobortis lorem lacus in tellus. Sed ac elementum arcu. Quisque placerat auctor laoreet.</p>
									<section class="features">
										<article>
											<a href="#" class="image"><img src="images/pic04.jpg" alt="" /></a>
											<h3 class="major">Sed feugiat lorem</h3>
											<p>Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id nulla dignissim dapibus ultrices.</p>
											<a href="#" class="special">Learn more</a>
										</article>
										<article>
											<a href="#" class="image"><img src="images/pic05.jpg" alt="" /></a>
											<h3 class="major">Nisl placerat</h3>
											<p>Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id nulla dignissim dapibus ultrices.</p>
											<a href="#" class="special">Learn more</a>
										</article>
										<article>
											<a href="#" class="image"><img src="images/pic06.jpg" alt="" /></a>
											<h3 class="major">Ante fermentum</h3>
											<p>Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id nulla dignissim dapibus ultrices.</p>
											<a href="#" class="special">Learn more</a>
										</article>
										<article>
											<a href="#" class="image"><img src="images/pic07.jpg" alt="" /></a>
											<h3 class="major">Fusce consequat</h3>
											<p>Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id nulla dignissim dapibus ultrices.</p>
											<a href="#" class="special">Learn more</a>
										</article>
									</section>
									<ul class="actions">
										<li><a href="#" class="button">Browse All</a></li>
									</ul>
								</div>
							</section> */}
          </section>
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

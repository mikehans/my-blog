import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import ContentSectionList from '../components/ContentSectionList'
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <ContentSectionList />
    {/* <h2>Hi I'm Mike</h2>
    <p>I'm a software developer with extensive experience in web development, Microsoft SharePoint, Microsoft Office, Microsoft 365.</p>

    <p>I blog about web development, Microsoft Power Platform and Microsoft 365 though I'll likely touch on other topics of interest. </p>
    
    <p>I live in Melbourne, Australia with family. I'm something of a gardener, woodworker and electronics hack.
    I try to grow vegetables and am periodically wonder what
    to do with a glut in some vegetable or another. My last go at radish pickles failed miserably, though I'm sure the
    compost loved it.</p>

    <p> I'm trying to figure out how to make better
        use of my Raspberry Pi and am trying to build a moisture monitoring system for my garden with my Arduino gear.</p>
    
    <p>This site is defintely a work in progress too. It's somewhat bare-bones right now. 
      It's been rather a while since I designed a website from scratch, 
      having worked predominantly on established websites.
      This site is being built (presently) in Gatsby and hosted on Netlify. 
      I have a lot to learn and it should be a lot of fun.
    </p> */}

  </Layout>
)

export default IndexPage

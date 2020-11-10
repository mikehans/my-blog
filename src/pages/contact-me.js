import React from "react"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

export default function ContactMe () {
    return (
        <Layout>
            <SEO title="Contact Me" />
            <h2>Contact Me</h2>
            <p>You can view my full resume on my <a href="https://www.linkedin.com/in/mikehansford/" target="_blank" rel="noreferrer">LinkedIn Profile.</a> <i class="fas fa-external-link-alt"></i></p>
            <p>Or check out my <a href="https://twitter.com/mikehansford10" target="_blank" rel="noreferrer">Twitter account</a> <i class="fas fa-external-link-alt"></i>.</p>
            <p>My <a href="https://github.com/mikehans" target="_blank" rel="noreferrer">Github</a> <i className="fab fa-github" ></i> account isn't the most exciting thing around, though the 
            source code for this site is there.</p>
        </Layout>
    )
}
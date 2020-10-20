import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"

export default function ContactMe () {
    return (
        <Layout>
            <h1>Contact Me</h1>
            <p>You can view my full resume on my <Link to="https://www.linkedin.com/in/mikehansford/">LinkedIn Profile.</Link></p>
            <p>Yes, I have a <Link to="https://github.com/mikehans">Github</Link> account but it's not terribly interesting...</p>
        </Layout>
    )
}
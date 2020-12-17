import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const SiteDevelopmentPage = () => (
    <Layout>
        <SEO title="Site Development" />
        <p>
            I'm currently re-doing the visual design for this site.
        </p>
        <p>
            You can check my <a href="https://vd-redesign-0d416f.netlify.app/">latest test deployment here.</a>
        </p>
        <p>
        I am currently adapting the visual design for React from <a href="https://html5up.net/solid-state">the Solid State design on HTML5 Up.</a>
        </p>
        <p> You can view my <a href="https://github.com/mikehans/my-blog/tree/vd-redesign">vd-redesign branch on Github.</a></p>

        <p>
            You can also follow site development on my <a href="https://trello.com/b/LE4p3TtF/website" target="_blank">Trello board.</a>
        </p>
    </Layout>
);

export default SiteDevelopmentPage;
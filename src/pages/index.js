import React, { useEffect } from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import ContentSectionList from '../components/ContentSectionList'
import SEO from "../components/seo"

const IndexPage = () => {

  useEffect(() => {
    document.body.classList.add('hasBackgroundImage');
  });

  return (
    <Layout>
      <SEO title="Home" />
      <ContentSectionList />
    </Layout>
  );
};

export default IndexPage

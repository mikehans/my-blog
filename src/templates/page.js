import React, {useEffect} from 'react';
// import { Link } from 'gatsby';
import Layout from "../components/layout";
// import dateFormatter from '../components/utilities/dateFormatter';
import styles from './page.module.css';

export default function PageTemplate({ data }) {
    
    useEffect(() => {
        document.body.classList.add('hasBackgroundImage');
    });
    
    const page = data.markdownRemark;
    
    return (
        <Layout>
            <div className={styles.content}> 
                <section className={styles.contentSection}>
                    <div className={styles.contentSectionInner} dangerouslySetInnerHTML={{ __html: page.html }}></div>
                </section>
            </div>
        </Layout>
    )
}

export const postQuery = graphql`
query PageByPath($path: String!) {
    markdownRemark(frontmatter: {path: {eq: $path}}, fileAbsolutePath: {glob: "**/pages/*"}) {
      html
      frontmatter {
        path
        title
        author
        date
        publish
      }
    }
  }
  
`

// allMarkdownRemark(filter: {frontmatter: {publish: {eq: true}}, fileAbsolutePath: {glob: "**/log/**"}}, sort: {fields: frontmatter___date, order: DESC}) {

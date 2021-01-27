import React from 'react'
import Contact from './Contact'
import styles from './Footer.module.css'

export default function Footer(props) {
    return (
    <footer className={styles.mainFooter}>
        <div className={styles.mainFooterContainer}>
            <Contact {...props} />
            <p>
            © {new Date().getFullYear()}, Mike Hansford.
            </p>
            
        </div>
    </footer>
    )
}

import React from 'react'
import styles from './Footer.module.css'

export default function Footer() {
    return (
    <footer className={styles.mainFooter}>
        <div className={styles.mainFooterContainer}>
            © {new Date().getFullYear()}, Mike Hansford.
        </div>
    </footer>
    )
}

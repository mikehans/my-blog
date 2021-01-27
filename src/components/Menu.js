// import { nominalTypeHack } from 'prop-types'
import React from 'react'
import {Link} from 'gatsby'
import styles from './Menu.module.css';

export default function Menu() {
    return (
        <nav className={styles.navbar}>
            <ul className={styles.navbarNav}>
                <li className={styles.navItem}><Link to="/">Home</Link></li>
                <li className={styles.navItem}><Link to="/contact-me">Contact Me</Link></li>
                <li className={styles.navItem}><Link to="/about-me">About Me</Link></li>
                <li className={styles.navItem}><Link to="/blog">Blog</Link></li>
                <li className={styles.navItem}><Link to="/site-development">Site Development</Link></li>
            </ul>
        </nav>
    )
}

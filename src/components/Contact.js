import React from 'react';
import styles from './Contact.module.css';
import {Link} from 'gatsby';

export default function Contact({LinkedIn, Twitter, Github}) {
    const makeHttpsUrl = (url) => {
        return `https://${url}`
    };

    return (
        <ul className={styles.contactList}>
            <li className={styles.contactListTwitter}>
                <Link to={makeHttpsUrl(Twitter)} target="_blank" rel="noopener">{Twitter}</Link>
            </li>
            <li className={styles.contactListLinkedIn}>
                <Link to={makeHttpsUrl(LinkedIn)} target="_blank" rel="noopener">{LinkedIn}</Link>
            </li>
            <li className={styles.contactListGithub}>
                <Link to={makeHttpsUrl(Github)} target="_blank" rel="noopener">https://github.com/mikehans</Link>
            </li>
        </ul>
    )
}

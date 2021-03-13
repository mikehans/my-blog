import React from 'react'
import Contact from './Contact'
import ContactForm from './ContactForm'
import styles from './Footer.module.css'

export default function Footer(props) {
    return (
        <footer className={styles.mainFooter}>
            <div className={styles.mainFooterContainer}>
                <h2>Get in touch</h2>
                <p>
                    I'm always interested in hearing from you. You can get in touch through one of
                    the channels listed or use the contact form here.
                </p>
                <div className={styles.mainFooterContacts}>
                    {/* <ContactForm /> */}
                    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfkT8ht7_bzpinAmq_P7Jfk3UDtIwDhLAbPut57LJtSVIdARQ/viewform?embedded=true" width="500" height="900" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
                    <p>
                        <Contact {...props} />
                        © {new Date().getFullYear()}, Mike Hansford.
                    </p>
                </div>
            </div>
        </footer>
    )
}

import React from 'react'
import styles from './ContactForm.module.css'

export default function ContactForm() {
    return (
        <form className={styles.contactForm} name="contact" method="POST" data-netlify="true">
            <div className={styles.contactFormFields}>
                <div className={styles.contactFormField}>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" />
                </div>

                <div className={styles.contactFormField}>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" />
                </div>

                <div className={styles.contactFormField}>
                    <label htmlFor="message">Message</label>
                    <textarea name="message"></textarea>
                </div>

                <div className={styles.contactFormButton}>
                    <button type="submit">Send</button>
                </div>
            </div>
        </form>
    )
}

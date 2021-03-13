import React, { useState } from 'react'
import styles from './ContactForm.module.css'

export default function ContactForm() {

    return (
        <form action="#" className={styles.contactForm} id="contactForm" name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field">
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="contact" value="Contact Form" />
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
                    <textarea name="message" ></textarea>
                </div>

                <div className={styles.contactFormButton}>
                    <button type="submit">Send</button>
                </div>
            </div>
        </form>
    )
}

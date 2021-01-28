import React from 'react'
import styles from './Banner.module.css'

export default function Banner({siteTitle, subTitle}) {
    return (
        <section className={styles.banner}>
            {/* <div className="logo">
                <span className="icon fa-gem"></span>
            </div> */}
            <h2 className={styles.bannerSiteTitle}>{siteTitle}</h2>
            <p className={styles.bannerSubTitle}>{subTitle}</p>
        </section>
    )
}

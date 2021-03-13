import React from 'react'
import ContentSection from './ContentSection'
import styles from './ContentSectionList.module.css'

export default function ContentSectionList() {
    return (
        <section className={styles.contentSectionList}>
            <ContentSection 
                styleNumber="1"
                heading="Hi I'm Mike"
                intro="I'm a software developer, family man, woodworker, gardener and electronics hack."
                link='/about-me' />
            <ContentSection 
                styleNumber="2" 
                heading="Read my tech blog"
                intro="I blog mostly about JavaScript, ReactJS, dotNET and Microsoft 365."
                link='/blog'
                altFacing 
                />
            <ContentSection styleNumber="3" />
            <ContentSection styleNumber="1" altFacing />
        </section>
    )
}

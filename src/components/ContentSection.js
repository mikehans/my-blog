import React from 'react'
import {Link} from 'gatsby'
import styles from './ContentSection.module.css';

export default function ContentSection(props) {
    console.log('props', props);


    let {styleNumber, altFacing = false, heading='Test me', intro='Lorem ipsum forceum blah blah blah', link='#'} = props;

    console.log(styleNumber, altFacing);

    let styleString = '';

    switch (styleNumber){
        case '1':
            styleString = `${styles.contentSection} ${styles.contentSectionStyle1}`;
            break;
        case '2':
            styleString = `${styles.contentSection} ${styles.contentSectionStyle2}`;
            break;
        case '3':
            styleString = `${styles.contentSection} ${styles.contentSectionStyle3}`;
            break;
        default:
            styleString = `${styles.contentSection} ${styles.contentSectionStyle1} DEFAULT`;
    }

    styleString = altFacing ? `${styleString} ${styles.contentSectionAltFacing}` : styleString;

    
    return (
        <section className={styleString}>
            <div className={styles.contentSectionInner}>
                    <a href="#" className="image"><img src="images/pic01.jpg" alt="" /></a>
                    <div className="content">
                        <h2 className={styles.contentSectionMajor}>{heading}</h2>
                        <p>{intro}</p>
                        <Link to={link} className="special">Learn more</Link>
                    </div>
                </div>
            </section>
    )
}

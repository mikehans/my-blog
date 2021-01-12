import React from 'react'
import styles from './ContentSection.module.css';

export default function ContentSection(props) {
    console.log('props', props);


    let {styleNumber, altFacing = false} = props;

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
                        <h2 className="major">Magna arcu feugiat</h2>
                        <p>Lorem ipsum dolor sit amet, etiam lorem adipiscing elit. Cras turpis ante, nullam sit amet turpis non, sollicitudin posuere urna. Mauris id tellus arcu. Nunc vehicula id nulla dignissim dapibus. Nullam ultrices, neque et faucibus viverra, ex nulla cursus.</p>
                        <a href="#" className="special">Learn more</a>
                    </div>
                </div>
            </section>
    )
}

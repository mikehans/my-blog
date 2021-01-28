// import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"
import dateFormatter from './utilities/dateFormatter';
import styles from "./Devlog.module.css"

const DevLogEntry = (props) => {
    return (
        <article className={styles.logEntry} key={props.node.id}>
            <h3 className={styles.logDate}>{dateFormatter(props.node.frontmatter.date, 'long')}</h3>
            <div className={styles.logTitle}>{props.node.frontmatter.title}</div>
            <div className={styles.logBody} dangerouslySetInnerHTML={{__html: props.node.html}}></div>
        </article>
    );
};

export default DevLogEntry;
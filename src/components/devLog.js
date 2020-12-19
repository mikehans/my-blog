import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import dateFormatter from '../components/utilities/dateFormatter';
import "./devlog.css"

const DevLogEntry = (props) => {
    console.log(JSON.stringify(props, null, 4));
    return (
        <article className="logEntry" key={props.node.id}>
            <h3 className="logDate">{dateFormatter(props.node.frontmatter.date, 'long')}</h3>
            <div className="logTitle">{props.node.frontmatter.title}</div>
            <div className="logBody" dangerouslySetInnerHTML={{__html: props.node.html}}></div>
        </article>
    );
};

export default DevLogEntry;
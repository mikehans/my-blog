// import { nominalTypeHack } from 'prop-types'
import React from 'react'
import {Link} from 'gatsby'

export default function Menu() {
    return (
        <nav className="mainNav">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/contact-me">Contact Me</Link></li>
                <li><Link to="/blog">Blog</Link></li>
            </ul>
        </nav>
    )
}

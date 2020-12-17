// import { nominalTypeHack } from 'prop-types'
import React from 'react'
// import {
//     Collapse,
//     Nav,
//     Navbar,
//     NavItem
// } from 'reactstrap';
import {Link} from 'gatsby'

export default function Menu() {
    return (
        <nav className="navbar">
            <ul className="navbar-nav">
                <li className="nav-item"><Link to="/">Home</Link></li>
                <li className="nav-item"><Link to="/contact-me">Contact Me</Link></li>
                <li className="nav-item"><Link to="/blog">Blog</Link></li>
                <li className="nav-item"><Link to="/site-development">Site Development</Link></li>
            </ul>
        </nav>
    )
}

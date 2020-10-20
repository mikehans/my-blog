import React from 'react'

export default function Footer() {
    return (
    <footer className="mainFooter">
        © {new Date().getFullYear()}, Mike Hansford. Built with
        {` `}
        <a href="https://www.gatsbyjs.com" target="_blank">Gatsby</a>
    </footer>
    )
}

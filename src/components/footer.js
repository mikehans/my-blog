import React from 'react'

export default function Footer() {
    return (
    <footer className="mainFooter">
        <div className="container">
            © {new Date().getFullYear()}, Mike Hansford. Built with
            {` `}
            <a href="https://www.gatsbyjs.com" target="_blank" rel="noreferrer">Gatsby</a>
        </div>
    </footer>
    )
}

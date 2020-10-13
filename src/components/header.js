import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Menu from './menu'

const Header = ({ siteTitle }) => (
  <header className="mainHeader">
    <h1>
      <Link to="/">
        {siteTitle}
      </Link>
    </h1>
    <Menu />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

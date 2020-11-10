import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Menu from './menu'

const Header = ({ siteTitle, subTitle }) => (
  <header className="mainHeader">
    <div className="container">
      <h1>
        <Link className="title" to="/">
          {siteTitle}
        </Link>
      </h1>
      <p className="subTitle">{subTitle}</p>
      <Menu />
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

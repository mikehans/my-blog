import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Menu from './Menu'
import styles from './Header.module.css';

const Header = ({ siteTitle, subTitle }) => (
  <header id="header" className={styles.mainHeader}>
    <div className={styles.container}>
      <h1>
        <Link className={styles.title} to="/">
          {siteTitle}
        </Link>
      </h1>
      {/* <p className="subTitle">{subTitle}</p> */}
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

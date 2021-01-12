import PropTypes from "prop-types"
import React from "react"

import Navigation from "./navigation"

const Header = ({ siteTitle }) => (
  <header>
    <Navigation />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

export default Header

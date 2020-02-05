/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import "../style/bootstrap.min.css"
// import "../style/jquery-ui.css"
import "../style/all.min.css"
import "../style/animate.css"
import "../style/stellarnav.min.css"
import "../style/magnific-popup.css"
import "../fonts/stylesheet.css"
import "../style/style.css"
import "../style/responsive.css"

import SEO from './seo'
import Header from "./header"
import Footer from "./footer"
import SocialArea from "./socialarea"

const Layout = ({ children }) => {
  
  return (
    <div>
      <SEO />
      <Header />
      {children}
      <SocialArea />
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

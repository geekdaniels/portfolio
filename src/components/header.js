import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "../images/logo.png"

class Header extends React.Component {
  // const Header = ({ siteTitle }) => (
  state = {
    isTop: false,
  }

  componentDidMount() {
    document.addEventListener("scroll", () => {
      const isTop = window.scrollY > 85
      if (isTop !== this.state.isTop) {
        this.setState({ isTop })
      }
    })
  }

  render() {
    return (
    <header className={this.state.isTop ? "navbar-fixed-top" : ""}>
      <div className="container">
        <div className="row">
          <div className="col-lg-2 col-sm-4 col-5">
            <div className="">
              <Link to="/" className="link">
                <img src={Logo} alt="" />
              </Link>
            </div>
          </div>
          <div className="col-lg-8 col-sm-4 col-7">
            <div className="main-menu stellarnav">
              <ul>
                <li>
                  <Link to="/" activeClassName="active">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/designs" activeClassName="active">
                    Designs
                  </Link>
                </li>
                <li>
                  <Link to="/blog" activeClassName="active">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="/faq" activeClassName="active">
                    FAQs
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-sm-4 col-12 d-none d-sm-block">
            <div className="lets-chat">
              <Link to="/contact" className="link btn-style-1">
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
    )
  }
}

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

export default Header

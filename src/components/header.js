import Img from "gatsby-image"
import { Link, StaticQuery, graphql } from "gatsby"

import React from "react"

class Header extends React.Component {
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
                <Link
                  to="/"
                  className="link"
                  title="Welcome I am olufemi oladotun Daniel, Web optimization specialist"
                >
                  <StaticQuery
                    query={graphql`
                      {
                        logo: file(relativePath: { eq: "logo.png" }) {
                          childImageSharp {
                            fluid(maxWidth: 1600) {
                              ...GatsbyImageSharpFluid
                            }
                          }
                        }
                      }
                    `}
                    render={data => (
                      <Img
                        fluid={data.logo.childImageSharp.fluid}
                        alt="Welcome I am olufemi oladotun Daniel, Web optimization specialist"
                      />
                    )}
                  />
                </Link>
              </div>
            </div>
            <div className="col-lg-8 col-sm-4 col-7">
              <div className="main-menu stellarnav">
                <ul>
                  <li className="d-none">
                    <Link
                      to="/"
                      activeClassName="active"
                      title="Welcome I am olufemi oladotun Daniel, Web optimization specialist"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/about" activeClassName="active">
                      About
                    </Link>
                  </li>

                  <li className="d-none">
                    <Link
                      to="/blog"
                      activeClassName="active"
                      title="Read blog posts by olufemi oladotun Daniel"
                    >
                      Blog
                    </Link>
                  </li>

                  <li className="d-none">
                    <Link to="/faq" activeClassName="active">
                      FAQs
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-sm-4 col-12 d-none d-sm-block">
              <div className="lets-chat">
                <Link
                  to="/contact"
                  className="link btn-style-1"
                  title="Contact and get in touch with me"
                >
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

export default Header

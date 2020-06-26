// import Img from "gatsby-image"
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

    document.getElementById("hamburger").addEventListener("click", e => {
      this.setState({ isTop: true });
    })
  }

  render() {
    return (
      <header className={
        this.state.isTop
          ? "navbar-fixed-top"
          : ""
      }>
        <div>
          <nav
            className="container navbar navbar-expand-lg navbar-dark py-md-0"
          >
            <Link
              to="/"
              className="lnk navbar-brand"
              title="Welcome I am olufemi oladotun Daniel, Web optimization specialist"
            >
              <StaticQuery
                query={graphql`
                  {
                    logo: file(relativePath: { eq: "logo.png" }) {
                      childImageSharp {
                        fluid(maxWidth: 1600) {
                          src
                          ...GatsbyImageSharpFluid
                        }
                      }
                    }
                  }
                `}
                render={data => (
                  <img
                    src={data.logo.childImageSharp.fluid.src}
                    alt="Welcome I am olufemi oladotun Daniel, Web optimization specialist"
                    width="180"
                  />
                )}
              />
            </Link>
            <button
              className="hamburger hamburger--3dx-r navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
              id="hamburger"
            >
              {" "}
              <span class="hamburger-box">
                <span class="hamburger-inner"></span>{" "}
              </span>
            </button>
            <div
              className="collapse navbar-collapse main-menu stellarnav"
              id="navbarNav"
            >
              <ul className="navbar-nav ml-auto landing-page mr-lg-5">
                <li className="">
                  <Link
                    to="/"
                    activeClassName="active"
                    title="Welcome I am olufemi oladotun Daniel, Web optimization specialist"
                  >
                    Home
                  </Link>
                </li>

                <li>
                  <Link to="/services/" activeClassName="active">
                    Services
                  </Link>
                </li>

                <li>
                  <Link to="/about/" activeClassName="active">
                    About
                  </Link>
                </li>

                <li className="">
                  <Link
                    to="/blog/"
                    activeClassName="active"
                    title="Read blog posts by olufemi oladotun Daniel"
                  >
                    Blog
                  </Link>
                </li>

                <li className="d-none">
                  <Link to="/faq/" activeClassName="active">
                    FAQs
                  </Link>
                </li>
              </ul>

              <ul className="ml-lg-5">
                <li className="">
                  <div className="lets-chat">
                    <Link
                      to="/contact/"
                      className="link btn-style-1"
                      title="Contact and get in touch with me"
                    >
                      Contact Me
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <div className="container mt-5 d-none">
          <div className="row">
            <div className="col-lg-2 col-sm-4 col-5">
              <div className="">
                {/* <Link
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
                </Link> */}
              </div>
            </div>
            <div className="col-lg-8 col-sm-4 col-7">
              <div className="main-menu stellarnav">
                <ul>
                  <li className="">
                    <Link
                      to="/"
                      activeClassName="active"
                      title="Welcome I am olufemi oladotun Daniel, Web optimization specialist"
                    >
                      Home
                    </Link>
                  </li>

                  <li>
                    <Link to="/services/" activeClassName="active">
                      Services
                    </Link>
                  </li>

                  <li>
                    <Link to="/about/" activeClassName="active">
                      About
                    </Link>
                  </li>

                  <li className="">
                    <Link
                      to="/blog/"
                      activeClassName="active"
                      title="Read blog posts by olufemi oladotun Daniel"
                    >
                      Blog
                    </Link>
                  </li>

                  <li className="d-none">
                    <Link to="/faq/" activeClassName="active">
                      FAQs
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-sm-4 col-12 d-none d-sm-block">
              <div className="lets-chat">
                <Link
                  to="/contact/"
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

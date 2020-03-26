import React from "react"
import Img from "gatsby-image"
import { Link, StaticQuery, graphql } from "gatsby"

const AboutMe = () => (
  <>
    <StaticQuery
      query={graphql`
        {
          about_olufemi: file(relativePath: { eq: "about_olufemi.png" }) {
            childImageSharp {
              fluid(maxWidth: 1600) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => (
        <section className="h2-about-area social-area pt-4">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 col-12">
                <div className="h2-about-banner">
                  <div className="banner">
                    <Img
                      fluid={data.about_olufemi.childImageSharp.fluid}
                      alt="about olufemi oladotun"
                    />
                  </div>
                </div>
              </div>

              <div className="col-lg-7 col-12 d-flex align-items-center">
                <div className="h2-about-content">
                  <div className="section-title">
                    <p className="intro title mt-5 mt-lg-0">ABOUT ME</p>
                  </div>
                  <p className="text">
                    Your website is so slow your visitors barely stay to even
                    realise what it's about? <br />
                    <span className="color">Let me help.</span>
                  </p>
                  <p className="text">
                    Hi. I’m Olufemi Oladotun Daniel, a frontend developer and
                    web optimization specialist who turns slow websites into
                    super fast performing lead-generating machines.
                  </p>

                  <p className="text">
                    I uncover the issues with your copy, web design or user
                    experience and give you a clear roadmap to a better website
                    that shows you how to fix the issues that are holding you
                    back.
                  </p>

                  <p className="text">
                    Is your website slow? I'll turn it into a{" "}
                    <span className="color">
                      super fast website that brings sales and gain customers
                    </span>
                    .
                  </p>
                  {/* <Link to="/about" className="link btn-style-1 mt-5">
                    Find out more about Daniel
                  </Link> */}
                </div>
              </div>
            </div>

           </div>
        </section>
      )}
    />
  </>
)

export default AboutMe

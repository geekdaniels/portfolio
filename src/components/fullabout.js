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

            <div className="row justify-content-center">
              <div className="col-lg-10 mt-4">
                <div className="h2-about-content">
                  <p className="text">
                    When I’m not reviewing websites, optimizing websites or
                    blogging about ways to make websites fast and bring sales,
                    you’ll probably find me having fun around loved ones,
                    reading a book, doing some bit of research or teaching.
                  </p>

                  <p className="text">
                    I used to work as a designer and with an established digital
                    house. But after some years, it became clear to me I needed to help fill a void.
                    Provide solutions to slow websites.
                  </p>

                  <p className="text">
                    Now, I help business owners make sure that their websites
                    reflect the true value of their products and services and
                    knock the socks off their prospects. And I look forward to
                    every website review and web optimization project knowing
                    that they’ll make a real difference to a real person.
                  </p>

                  <div className="section-title">
                    <p className="title mt-5 text">
                      <span className="color">
                        Making your website into a sales machine is a lot like
                        translating your message into a language easy to
                        understand for your visitors
                      </span>
                    </p>
                  </div>

                  <p className="text">
                    The way you convey your message on your website doesn’t work
                    the same ways as in a personal conversation.
                  </p>

                  <p className="text">As it stands:</p>

                  <ul className="mt-3">
                    <li className="my-3">web copy is your vocabulary,</li>
                    <li className="my-3">web design is your grammar,</li>
                    <li className="my-3">
                      and how well you use them together creates a user
                      experience that either drives people away or makes them
                      click the “buy” button.
                    </li>
                  </ul>

                  <p className="text">
                    A copywriter can help you with your web copy, but she’ll
                    miss the clutter on your website that kills your message.
                  </p>
                  <p className="text">
                    A web designer can make your website look beautiful, but
                    she’ll miss the jargon in your web copy that makes it
                    unreadable.
                  </p>
                  <p className="text">
                    I look at your website as a whole and see the big picture.
                  </p>

                  <div className="section-title">
                    <p className="title mt-5 text">
                      <span className="color">
                        Want a professional feedback on your website or page?
                      </span>
                    </p>

                    <p className="text">
                      Drop me a line at{" "}
                      <a href="mailto:bygeekdaniels@gmail.com">
                        <span class="text-warning">
                        bygeekdaniels@gmail.com
                        </span>
                      </a>
                    </p>

                    <p className="text">
                      …or use <Link to="/contact"><span class="text-warning">this contact form</span></Link> that will deliver your message
                      personally to me the same way.
                    </p>

                    <p className="text">I usually respond within 24 hours.</p>
                  </div>
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

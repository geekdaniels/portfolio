import React from "react"
import Img from "gatsby-image"
import { Link, StaticQuery, graphql } from "gatsby"
import SEO from "../components/seo"

import Layout from "../components/layout"
import AboutMe from "../components/landingpage/aboutme"
import ServiceArea from "../components/landingpage/servicearea"
// import ExperienceArea from "../components/landingpage/experience"
// import ProjectArea from "../components/landingpage/projectarea"
import Testimonial from "../components/landingpage/testimonialarea"
import FeaturedBlog from "../components/featured"

// import Element_1 from "../images/home1/hero-element-1.png"
// import Element_2 from "../images/home1/hero-element-2.png"
// import Element_3 from "../images/home1/hero-element-3.png"
// import Element_4 from "../images/home1/hero-element-4.png"

const IndexPage = () => {
  return (
    <Layout>
      <SEO
        title="Olufemi Oladotun - Web designer | Web developer in Lagos"
        desc="I am Olufemi Oladotun Daniel, a Web designer & Web developer experienced in developing super fast websites that generate leads and bring sales."
      />

      <StaticQuery
        query={graphql`
          {
            profile_img: file(
              relativePath: { eq: "olufemi-oladotun-daniel.png" }
            ) {
              childImageSharp {
                fluid(maxWidth: 500) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        `}
        render={data => (
          <section className="hero-area">
            <div className="hero-element-1">
              <img
                src="https://res.cloudinary.com/dnvo5klvx/image/upload/v1594157216/hero-element-1_c5umyd.png"
                alt="Welcome to olufemi oladotun Daniel's website, a Web optimization specialist"
                loading="lazy"
              />
            </div>
            <div className="hero-element-2">
              <img
                src="https://res.cloudinary.com/dnvo5klvx/image/upload/v1594157216/hero-element-2_erxuak.png"
                alt="Welcome to olufemi oladotun Daniel's website, a Web optimization specialist"
                loading="lazy"
              />
            </div>
            <div className="hero-element-3">
              <img
                src="https://res.cloudinary.com/dnvo5klvx/image/upload/v1594157216/hero-element-3_icn4k4.png"
                alt="Welcome to olufemi oladotun Daniel's website, a Web optimization specialist"
                loading="lazy"
              />
            </div>
            <div className="hero-element-4">
              <img
                src="https://res.cloudinary.com/dnvo5klvx/image/upload/v1594157217/hero-element-4_wzp0gs.png"
                alt="Welcome to olufemi oladotun Daniel's website, a Web optimization specialist"
                loading="lazy"
              />
            </div>

            <div className="container">
              <div className="row">
                <div className="col-lg-7 col-12">
                  <div className="hero-content text-left">
                    <h1 className="title mt-5">
                      Giving you Super fast websites that bring sales and gain
                      customers.
                    </h1>
                    <h4 className="sub_title mt-lg-2 mb-2 text-white">
                      to scale up your business
                    </h4>

                    <Link to="/services/" className="link btn-style-1 mt-5">
                      View Services
                    </Link>
                  </div>
                </div>

                <div className="col-lg-5 col-12">
                  <div className="hero-content text-center">
                    <Img
                      fluid={data.profile_img.childImageSharp.fluid}
                      alt="Welcome I am olufemi oladotun Daniel, Web optimization specialist"
                      className="d-none d-lg-block"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      />

      <Testimonial />
      <ServiceArea />
      <AboutMe />

      <section className="h2-about-area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7 col-12 text-center">
              <div className="h2-about-content">
                <div className="section-title text-center">
                  <h2 className="title text-uppercase text-center">
                    So, I've Created something to Help You
                  </h2>
                </div>

                <p className="text">
                  Page speed optimization services are crucial to great SEO.
                  Without ensuring that your website loads quickly for visitors,
                  your site will likely lose conversions and revenue. Nearly
                  half of web searchers won’t even wait three seconds for a page
                  to load before bouncing to another site.{" "}
                  <span className="color">
                    Is your site fast enough to keep users around?
                  </span>
                </p>
                {/* <div className="section-title">
                  <p className="text text-center">
                    <p className="intro">Get a free website test now</p>
                  </p>
                </div> */}

                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://view.flodesk.com/pages/5e66c196ea014a002641b0cb"
                  className="link btn-style-1 mt-5 mx-auto"
                >
                  Click to get your free website test now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FeaturedBlog />

      {/* 
      <ServiceArea />
      <ExperienceArea />
	  <ProjectArea /> 
	  */}
    </Layout>
  )
}

export default IndexPage

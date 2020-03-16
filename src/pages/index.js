import React from "react"
import Img from "gatsby-image"
import { Link, StaticQuery, graphql } from "gatsby"
import SEO from "../components/seo"

import Layout from "../components/layout"
// import SEO from "../components/seo"
import AboutMe from "../components/landingpage/aboutme"
// import ServiceArea from "../components/landingpage/servicearea"
// import ExperienceArea from "../components/landingpage/experience"
// import ProjectArea from "../components/landingpage/projectarea"
import Testimonial from "../components/landingpage/testimonialarea"

import Element_1 from "../images/home1/hero-element-1.png"
import Element_2 from "../images/home1/hero-element-2.png"
import Element_3 from "../images/home1/hero-element-3.png"
import Element_4 from "../images/home1/hero-element-4.png"

const IndexPage = () => {
  return (
    <Layout>
      <SEO
        title="Olufemi Oladotun Daniel - Web Optimization Specialist"
        description="I am Olufemi Oladotun Daniel, a Frontend Developer and Web Optimization Specialist with a lot of experience in ensuring websites are fast, bring sales and generate lead that turn to clients"
      />

      <StaticQuery
        query={graphql`
          {
            profile_img: file(
              relativePath: { eq: "olufemi-oladotun-daniel.png" }
            ) {
              childImageSharp {
                fluid(maxWidth: 1600) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        `}
        render={data => (
          <section className="hero-area">
            <div className="hero-element-1">
              <img src={Element_1} alt="Welcome to olufemi oladotun Daniel's website, a Web optimization specialist" />
            </div>
            <div className="hero-element-2">
              <img src={Element_2} alt="Welcome to olufemi oladotun Daniel's website, a Web optimization specialist" />
            </div>
            <div className="hero-element-3">
              <img src={Element_3} alt="Welcome to olufemi oladotun Daniel's website, a Web optimization specialist" />
            </div>
            <div className="hero-element-4">
              <img src={Element_4} alt="Welcome to olufemi oladotun Daniel's website, a Web optimization specialist" />
            </div>
            
            <div className="container">
              <div className="row">
                <div className="col-lg-7 col-12">
                  <div className="hero-content text-left">
                    <h1 className="title">
                      Get Super fast websites that bring sales and gain
                      customers.
                    </h1>
                    <h4 className="sub_title mt-lg-2 mb-2 text-white">
                      for businesses
                    </h4>

                    <Link to="/contact" class="link btn-style-1">
                      Contact me
                    </Link>
                  </div>
                </div>

                <div className="col-lg-5 col-12">
                  <div className="hero-content text-center">
                    <Img
                      fluid={data.profile_img.childImageSharp.fluid}
                      alt="Welcome I am olufemi oladotun Daniel, Web optimization specialist"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      />

      <Testimonial />
      <AboutMe />

      <section className="h2-about-area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7 col-12 text-center">
              <div className="h2-about-content">
                <div className="section-title text-center">
                  <h2 className="title text-uppercase text-center">
                    So, I've Created a FREEBIE to Help You
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
                <div className="section-title">
                  <p className="text text-center">
                    <p className="intro">Get a free website test now</p>
                  </p>
                </div>

                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://view.flodesk.com/pages/5e66c196ea014a002641b0cb"
                  className="link btn-style-1 mt-5 mx-auto"
                >
                  Get your freebie
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 
      <ServiceArea />
      <ExperienceArea />
	  <ProjectArea /> 
	  */}
    </Layout>
  )
}

export default IndexPage

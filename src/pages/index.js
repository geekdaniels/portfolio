import React from "react"
import {Link} from "gatsby"

import Layout from "../components/layout"
// import SEO from "../components/seo"
import ServiceArea from "../components/landingpage/servicearea"
import ExperienceArea from "../components/landingpage/experience"
import ProjectArea from "../components/landingpage/projectarea"
import Testimonial from "../components/landingpage/testimonialarea"

import Element_1 from "../images/home1/hero-element-1.png"
import Element_2 from "../images/home1/hero-element-2.png"
import Element_3 from "../images/home1/hero-element-3.png"
import Element_4 from "../images/home1/hero-element-4.png"
import About_img from "../images/home1/Untitled-1-01.png"

const IndexPage = () => {
  return (
    <Layout>
      {/* <SEO /> */}

      <section className="hero-area">
        <div className="hero-element-1">
          <img src={Element_1} alt="" />
        </div>
        <div className="hero-element-2">
          <img src={Element_2} alt="" />
        </div>
        <div className="hero-element-3">
          <img src={Element_3} alt="" />
        </div>
        <div className="hero-element-4">
          <img src={Element_4} alt="" />
        </div>
        {/* <div className="hero-banner"><img src="img/home1/team06.png" alt=""></div>  */}
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1 col-12">
              <div className="hero-content text-center">
                <h3 className="intro">Hello, I’m</h3>
                <h2 className="title">Olufemi Oladotun Daniel</h2>
                <h3 className="desg">Frontend Developer & UI/UX Designer</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="h2-about-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-12">
              <div className="h2-about-banner">
                <div className="banner">
                  <img src={About_img} alt="" />
                </div>
              </div>
            </div>

            <div className="col-lg-7 col-12 d-flex align-items-center">
              <div className="h2-about-content">
                <div className="section-title">
                  <p className="intro">ABOUT ME</p>
                  <h2 className="title">Why hire me for your next project?</h2>
                </div>
                <p className="text">
                  Meet my startup design agency{" "}
                  <span className="color">Shape Rex</span> Currently I am
                  working at <span className="color">CodeNext</span> as Product
                  Designer. Before that I’ve worked at{" "}
                  <span className="color">SpurBee</span>, Dhaka as a UX, UI
                  Designer. <br />
                  <br /> I love to work in User Experience & User Interface
                  designing. Because I love to solve the design problem and find
                  easy and better solutions to solve it. I always try my best to
                  make good user interface with the best user experience. I have
                  been working as a Visual designer from.
                </p>
                <Link href="#" className="link btn-style-1">
                  LEARN MORE
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServiceArea />
      <ExperienceArea />
      <ProjectArea />
      <Testimonial />
    </Layout>
  )
}

export default IndexPage

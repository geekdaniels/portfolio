import React from "react"
import Img from "gatsby-image"
import { StaticQuery, graphql } from "gatsby"
import Layout from "../components/layout";
import ServiceArea from "../components/landingpage/servicearea"

// import AboutArea from "../components/landingpage/aboutarea"
import SEO from "../components/seo"

const Design = () => (
  <Layout>
    <SEO
      title="Services | Olufemi Oladotun Daniel"
      desc="I'll help you find out why your website is slow, and isn’t
      bringing sales. Help fix your website design so it brings more sales."
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
          <div className="container">
            <div className="row">
              <div className="col-lg-7 col-12">
                <div className="hero-content text-left">
                  <h4 className="sub_title mt-lg-5 pt-lg-5 mb-2">
                    Services
                  </h4>
                  <h2 className="mb-4">
                  I'll help you find out why your website is slow, and isn’t
      bringing sales. Help fix your website design so it brings more sales and generate leads.
                  </h2>
                </div>
              </div>

              <div className="col-lg-3 offset-lg-1 col-12">
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

    <ServiceArea />
  </Layout>
)

export default Design

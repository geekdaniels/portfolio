import React from "react"
import Layout from "../components/layout"
// import Hero from "../components/landingpage/hero";
import AboutMe from "../components/fullabout"
import Testimonial from "../components/landingpage/testimonialarea"
import ExperienceArea from "../components/landingpage/experience"
import SEO from "../components/seo"

const About = () => (
  <Layout>
    <SEO
      title="About Olufemi Oladotun Daniel"
      desc="I'm Olufemi Oladotun. I turn under performing small business websites into fast and beautiful lead-generating machines."
    />

    <div className="mt-5 py-5"></div>
    <hr />
    <AboutMe />
    <Testimonial />
    <ExperienceArea />
  </Layout>
)

export default About

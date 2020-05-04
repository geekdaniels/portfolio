import React from "react"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import { Disqus, CommentCount } from "gatsby-plugin-disqus"
import SEO from "../components/seo"

import Layout from "../components/layout"

export const query = graphql`
  query BlogTemplate($id: String!) {
    contentfulBlog(id: { eq: $id }) {
      title
      id
      slug
      content {
        childMarkdownRemark {
          fields {
            readingTime {
              text
            }
          }
          html
        }
      }
      createdAt(formatString: "MMMM Do, YYYY")
      updatedAt(fromNow: true)
      seoTitle
      seoDescription
      seoKeywords
      seoImage {
        fluid(maxWidth: 1200, quality: 100) {
          ...GatsbyContentfulFluid
          src
        }
      }
      featuredImage {
        fluid(maxWidth: 1200, quality: 100) {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`

const BlogTemplate = props => {
  let disqusConfig = {
    url: `https://www.olufemioladotun.com/blog/${props.data.contentfulBlog.slug}`,
    identifier: props.data.contentfulBlog.id,
    title: props.data.contentfulBlog.title,
  }
  return (
    <Layout>
      <SEO
        title={props.data.contentfulBlog.seoTitle}
        desc={props.data.contentfulBlog.seoDescription}
        banner={props.data.contentfulBlog.featuredImage.fluid.src}
        article
        pathname={`/blog/${props.data.contentfulBlog.slug}`}
        publication_date={props.data.contentfulBlog.createdAt}
        modification_date={props.data.contentfulBlog.updatedAt}
      />

      <section
        className="innerpage-hero-area"
        style={{ "margin-top": "140px" }}
      >
        <div className="iha-meta">
          <div className="container">
            <div className="row">
              <div className="col-lg-9 offset-lg-1 col-12">
                <div className="iha-all-meta">
                  <div className="iha-meta-box">
                    <p className="title">PUBLISH DATE</p>
                    <p className="info">
                      {props.data.contentfulBlog.createdAt}
                    </p>
                  </div>
                  <div className="iha-meta-box">
                    <p className="title">UPDATED</p>
                    <p className="info">
                      {props.data.contentfulBlog.updatedAt}
                    </p>
                  </div>
                  <div className="iha-meta-box">
                    <p className="title">READ TIME</p>
                    <p className="info">
                      {
                        props.data.contentfulBlog.content.childMarkdownRemark
                          .fields.readingTime.text
                      }
                    </p>
                  </div>
                  <div className="iha-meta-box">
                    <p className="title">SHARE</p>

                    <a
                      href={`https://www.facebook.com/sharer/sharer.php?u=https://www.olufemioladotun.com/blog/${props.data.contentfulBlog.slug}`}
                      className="info"
                      target="_blank"
                    >
                      Facebook
                    </a>
                  </div>
                  <div className="iha-meta-box">
                    <p className="title">
                      <span className="blank">d</span>
                    </p>
                    <p className="info">Twitter</p>
                  </div>
                  <div className="iha-meta-box">
                    <p className="title">
                      <span className="blank">d</span>
                    </p>
                    <p className="info">Linkedin</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="single-blog-post-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1 col-12">
              <div className="sbpa-content">
                <div class="img">
                  <Img
                    fluid={props.data.contentfulBlog.featuredImage.fluid}
                    alt={props.data.contentfulBlog.title}
                  />
                </div>
                <div
                  dangerouslySetInnerHTML={{
                    __html: `${props.data.contentfulBlog.content.childMarkdownRemark.html}`,
                  }}
                ></div>
                <CommentCount config={disqusConfig} />
                <Disqus config={disqusConfig} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default BlogTemplate

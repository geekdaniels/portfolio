import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Logo from "../images/logo.png"

const BlogList = props => {
  const blogContent = props.data.allContentfulBlog
  const { currentPage, numPages } = props.pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? "/blog" : `/blog/${currentPage - 1}`
  const nextPage = `/blog/${currentPage + 1}`
  return (
    <Layout>
      <SEO title="Blog" />

      <section className="page-blog-area mt-5 pt-4">
        <div className="container mt-5 pt-4">
          <div className="row mt-5 pt-4">
            <div className="col-lg-8 col-12">
              <div className="page-all-blog">
                <div className="row justify-content-center">
                  {blogContent.edges.map(edge => (
                    <div
                      key={edge.node.id}
                      className="col-lg-6 col-sm-6 col-12 my-3"
                    >
                      <div className="single-related-article">
                        <div className="img">
                          <Link to={`/blog/${edge.node.slug}`}>
                            <img
                              src={edge.node.featuredImage.fluid.src}
                              alt={edge.node.title}
                            />
                          </Link>
                        </div>
                        <div className="content">
                          <p className="date">
                            {edge.node.createdAt} |{" "}
                            {
                              edge.node.content.childMarkdownRemark.fields
                                .readingTime.text
                            }{" "}
                          </p>

                          <h4 className="title">
                            <Link to={`/blog/${edge.node.slug}`} class="link">
                              {edge.node.title}
                            </Link>
                          </h4>
                          <p className="text mb-4">
                            {edge.node.shortDescription}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="col-lg-4 offset-lg-0 col-sm-8 offset-sm-2 col-12">
              <div className="sidebar">
                <div className="sw-subscribe sidebar-widget">
                  <div className="subs-logo">
                    <img
                      src={Logo}
                      alt="Olufemi Oladotun"
                      title="Olufemi Oladotun Daniel"
                      width="120"
                    />
                  </div>
                  <h3 className="subs-title">Will you need case studies?</h3>
                  <p className="subs-text">
                    Communication with our Clients & teams is one of the most
                    important.
                  </p>
                  <form
                    action="https://olufemioladotun.us19.list-manage.com/subscribe/post?u=a7cc4e2b150cb90f76d82abc8&amp;id=16e05be985"
                    method="post"
                    id="mc-embedded-subscribe-form"
                    name="mc-embedded-subscribe-form"
                  >
                    <div className="subs-input-box">
                      <input
                        type="text"
                        name="FNAME"
                        placeholder="Enter your First Name"
                      />
                    </div>

                    <div className="subs-input-box">
                      <input
                        type="text"
                        name="EMAIL"
                        placeholder="Enter your email…"
                      />
                      <button type="submit">
                        <i className="fal fa-long-arrow-right"></i>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div className="pagination">
            <div className="pagination__item">
              {!isFirst && (
                <Link to={prevPage} rel="prev">
                  <div className="arrow__back"></div>
                  Back
                </Link>
              )}
            </div>
            <div className="pagination__item">
              {!isLast && (
                <Link to={nextPage} rel="next">
                  <div className="arrow__next"></div>
                  Next
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default BlogList

export const pageQuery = graphql`
  query BlogListQuery($skip: Int, $limit: Int) {
    allContentfulBlog(
      sort: { fields: [createdAt], order: DESC }
      filter: { node_locale: { eq: "en-US" } }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
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
            }
          }
          createdAt(formatString: "MMMM Do, YYYY")
          shortDescription
          category {
            title
            id
          }
          featuredImage {
            fluid(maxWidth: 1200, quality: 100) {
              ...GatsbyContentfulFluid
              src
            }
          }
        }
      }
    }
  }
`

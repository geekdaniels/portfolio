import React from "react"
import Helmet from "react-helmet"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Facebook from "./Facebook"
import Article from "./Article"
import Twitter from "./Twitter"

// Complete tutorial: https://www.gatsbyjs.org/docs/add-seo-component/

const SEO = ({
  title,
  desc,
  banner,
  pathname,
  article,
  publication_date,
  modification_date,
}) => {
  const { site } = useStaticQuery(query)

  const {
    buildTime,
    siteMetadata: {
      siteUrl,
      defaultTitle,
      defaultDescription,
      defaultBanner,
      brandlogo,
      headline,
      siteLanguage,
      ogLanguage,
      author,
      twitter,
      facebook,
    },
  } = site

  const seo = {
    title: title || defaultTitle,
    description: desc || defaultDescription,
    image: banner || `${siteUrl}${defaultBanner}`,
    url: `${siteUrl}${pathname || ""}`,
    brandlogo: `${siteUrl}${brandlogo}`,
  }

  // schema.org in JSONLD format
  // https://developers.google.com/search/docs/guides/intro-structured-data
  // You can fill out the 'author', 'creator' with more data or another type (e.g. 'Organization')

  const schemaOrgWebPage = {
    "@context": "http://schema.org",
    "@type": "WebSite",
    url: siteUrl,
    headline,
    inLanguage: siteLanguage,
    mainEntityOfPage: siteUrl,
    description: defaultDescription,
    name: defaultTitle,
    author: {
      "@type": "Person",
      name: author,
    },
    copyrightHolder: {
      "@type": "Person",
      name: author,
    },
    copyrightYear: "2020",
    creator: {
      "@type": "Person",
      name: author,
    },
    publisher: {
      "@type": "Person",
      name: author,
    },
    datePublished: "2020-01-18T10:30:00+01:00",
    dateModified: buildTime,
    image: {
      "@type": "ImageObject",
      url: `${siteUrl}${defaultBanner}`,
    },
  }

  // Initial breadcrumb list

  const itemListElement = [
    {
      "@type": "ListItem",
      item: {
        "@id": siteUrl,
        name: "Homepage",
      },
      position: 1,
    },
  ]

  let schemaArticle = null

  if (article) {
    schemaArticle = {
      "@context": "http://schema.org",
      "@type": "NewsArticle",
      url: seo.url,
      mainEntityOfPage: seo.url,
      headline: seo.title,
      inLanguage: siteLanguage,
      description: seo.description,
      name: seo.title,
      image: {
        "@type": "ImageObject",
        url: `https:${seo.image}`,
      },
      author: {
        "@type": "Person",
        name: author,
      },
      copyrightHolder: {
        "@type": "Person",
        name: author,
      },
      copyrightYear: "2020",
      creator: {
        "@type": "Person",
        name: author,
      },
      datePublished: publication_date,
      dateModified: modification_date,
      publisher: {
        "@type": "Person",
        name: "Olufemi Oladotun",
        logo: {
          "@type": "ImageObject",
          url: `${seo.brandlogo}`,
        },
      },
    }

    // Push current blogpost into breadcrumb list
    itemListElement.push({
      "@type": "ListItem",
      item: {
        "@id": seo.url,
        name: seo.title,
      },
      position: 2,
    })
  }

  const breadcrumb = {
    "@context": "http://schema.org",
    "@type": "BreadcrumbList",
    description: "Breadcrumbs list",
    name: "Breadcrumbs",
    itemListElement,
  }

  return (
    <>
      <Helmet title={seo.title}>
        <html lang={siteLanguage} />
        <meta name="description" content={seo.description} />
        <meta
          name="keywords"
          content="Olufemi oladotun Daniel, web optimzation specialist, Olufemi oladotun, Olufemi Daniel, UI Design, web design lagos, UX design lagos,  UX Designer Nigeria, front-end developer, front-end designer, web designer, User Experience, UX designer, User Interface, UI designer, Mobile app Design, web design Nigeria, web design lagos, Nigeria web designer, website design nigeria, e-commerce website, website development in Nigeria"
        />

        <meta
          name="image"
          content={article ? `https:${seo.image}` : seo.image}
        />

        {/* Insert schema.org data conditionally (webpage/article) + everytime (breadcrumbs) */}
        {!article && (
          <script type="application/ld+json">
            {JSON.stringify(schemaOrgWebPage)}
          </script>
        )}
        {article && (
          <script type="application/ld+json">
            {JSON.stringify(schemaArticle)}
          </script>
        )}
        <script type="application/ld+json">{JSON.stringify(breadcrumb)}</script>
      </Helmet>

      <Facebook
        desc={seo.description}
        image={`https:${seo.image}`}
        title={seo.title}
        type={article ? "article" : "website"}
        url={seo.url}
        locale={ogLanguage}
        name={facebook}
      />

      {article && (
        <Article
          publication_date={publication_date}
          modification_date={modification_date}
        />
      )}

      <Twitter
        type="summary_large_image"
        url={article ? seo.url : siteUrl}
        title={seo.title}
        image={article ? `https:${seo.image}` : seo.image}
        desc={seo.description}
        username={twitter}
      />

      <meta name="p:domain_verify" content="a26a928a1b1e1ca3649609a4c84d2973" />
    </>
  )
}

export default SEO

SEO.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  banner: PropTypes.string,
  pathname: PropTypes.string,
  article: PropTypes.bool,
  node: PropTypes.object,
}

SEO.defaultProps = {
  title: null,
  desc: null,
  banner: null,
  pathname: null,
  article: false,
  node: null,
}

const query = graphql`
  query SEO {
    site {
      buildTime(formatString: "YYYY-MM-DD")
      siteMetadata {
        siteUrl
        defaultTitle: title
        defaultDescription: description
        defaultBanner: banner
        headline
        siteLanguage
        ogLanguage
        author
        twitter
        facebook
      }
    }
  }
`

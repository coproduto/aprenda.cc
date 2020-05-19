import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"

export default function IndexPage({ data }) {
  const { allMarkdownRemark, site } = data
  const { siteMetadata } = site
  const titlesAndSlugs = allMarkdownRemark.edges.reduce(
    (acc, { node }) => acc.concat([[
      node.frontmatter.title,
      node.frontmatter.slug
    ]]),
    []
  )
  console.log(titlesAndSlugs)
  const titleList = titlesAndSlugs.map(
    ([title, slug]) =>
      (<li><a href={slug}>{title}</a></li>)
  )

  return (
    <>
      <Helmet>
        <title>{siteMetadata.title}</title>
        <meta name="description" content={siteMetadata.description} />
      </Helmet>
      <header><h1>{siteMetadata.title}</h1></header >
      <div className="page-index">
        <ol className="page-index-list">
          {titleList}
        </ol>
      </div>
    </>
  )
}

export const pageQuery = graphql`	
  query IndexQuery {
    site {
      siteMetadata {
        author
        description
        title
      }
    }
    allMarkdownRemark(
      sort: {order: ASC, fields: [frontmatter___order] }
      limit: 1000
    ) {
      edges {
        node {
          frontmatter {
            title
            slug
          }
        }
      }
    }
  }
`

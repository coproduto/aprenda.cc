import React from "react"
import { graphql } from "gatsby"

export default function Template({ data }) {
    const { markdownRemark } = data
    const { frontmatter, html } = markdownRemark
    return (
        <div className="blog-post-container">
            <div className="blog-post">
                <h1>{frontmatter.title}</h1>
                <div
                    className="blog-post-content"
                    dangerouslySetInnerHTML={{ __html: html }}
                />
            </div>
        </div>
    )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        slug
        title
      }
    }
  }
`

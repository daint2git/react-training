import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Posts = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            html
            headings {
              depth
              value
            }
            frontmatter {
              title
              date(formatString: "DD/MM/YYYY")
              excerpt
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="About" />
      <h1>Bài viết mới nhất</h1>
      {data.allMarkdownRemark.edges.map(({ node }, index) => (
        <div key={index}>
          <h3>
            {node.frontmatter.title}
            <span style={{ color: `#BBB` }}>— {node.frontmatter.date}</span>
          </h3>
          <p>{node.frontmatter.excerpt}</p>
        </div>
      ))}
    </Layout>
  )
}

export default Posts

import React from "react"
import { graphql } from "gatsby"
import Container from "../components/container"

export default ({ data }) => {
    return (
        <Container>
            <p>Total blog posts: {data.allMarkdownRemark.totalCount}</p>
            {
                data.allMarkdownRemark.edges.map(({ node }) => {
                    return (
                        <div key={node.id}>
                            <hr />
                            <p><b>{node.excerpt}</b></p>
                            <p>{node.frontmatter.author} - {node.frontmatter.date}</p>
                        </div>
                    )
                })
            }
        </Container>
    )
}

export const query = graphql`
query {
    allMarkdownRemark(sort: {order: DESC, fields: frontmatter___date}) {
        edges{
            node {
                id
                frontmatter {
                  date(fromNow: false)
                  title
                  author
                }
                excerpt
              }
            }
        totalCount
        }
  }
`
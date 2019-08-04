import React from "react"
import Container from "../components/container"

export default ({ data }) => {
    const post = data.markdownRemark
    return (
        <Container>
            <div>
                <h1>{post.frontmatter.title}</h1>
                <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </div>
        </Container>
    )
}

export const query = graphql`
query($id: String!) {
    markdownRemark( id: { eq: $id } ) {
      html
      frontmatter {
        title
      }
    }
  }
`
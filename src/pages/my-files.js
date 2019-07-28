import React from "react"
import { graphql } from "gatsby"
import Container from "../components/container"

export default ({ data }) => {
    return (
        <Container>
            <p>Learning to use source plugins (<a href="https://www.gatsbyjs.org/tutorial/part-five/">Docs Reference</a>)</p>

            <table>
          <thead>
            <tr>
              <th>relativePath</th>
              <th>prettySize</th>
              <th>extension</th>
              <th>birthTime</th>
            </tr>
          </thead>
          <tbody>
            {data.allFile.edges.map(({ node }, index) => (
              <tr key={index}>
                <td>{node.name}</td>
                <td>{node.prettySize}</td>
                <td>{node.extension}</td>
                <td>{node.birthTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </Container>
    )
}

export const query = graphql`
query{
    allFile {
        edges {
          node {
            name,
            birthTime,
            extension,
            prettySize,
          }
        }
      }
}
`
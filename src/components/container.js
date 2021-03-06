/** @jsx jsx */
import React from "react"
import { css, jsx } from "@emotion/core"
import { rhythm } from "../utils/typography"
import { Link, useStaticQuery, graphql } from "gatsby"

export default ({ children }) => {

  const data = useStaticQuery(
    graphql`
          query {
            site {
              siteMetadata {
                title
              }
            }
          }
        `
  )
  return (<div
    css={css`
      margin: 0 auto;
      max-width: 700px;
      padding: ${rhythm(2)};
      padding-top: ${rhythm(1.5)};
    `}
  >
    <Link to={`/`}>
      <h3
        css={css`
          margin-bottom: ${rhythm(2)};
          display: inline-block;
          font-style: normal;
        `}
      >
        {data.site.siteMetadata.title}
      </h3>
    </Link>
    <div css={css`
        float: right;
      `}>
      <Link
        to={`/blog/`}

      >
        Blog
    </Link>{' | '}
      <Link
        to={`/my-files/`}

      >
        Source Plugins
    </Link>{' | '}
      <Link
        to={`/about/`}
      >
        About
    </Link>
    </div>
    {children}
  </div>)
}

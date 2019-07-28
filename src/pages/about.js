import React from "react";
import Container from "../components/container"
import {graphql} from "gatsby"

export default ({data}) => (
    <Container>
        <h1>{data.site.siteMetadata.title}</h1>
        <p>
            We're the only site running on your computer dedicated to showing the best
            photos and videos of pandas eating lots of food.
    </p>
    </Container>
)

export const query = graphql`
query{
    site{
        siteMetadata{
            title
        }
    }
}`
import React from "react"
import Container from "../components/container"
import Header from "../components/header"
import userStyle from "../styles/about-css-modules.module.css"

const User = ({username,avatar,excerpt }) => (
    <div className={userStyle.user}>
        <img src={avatar} className={userStyle.avatar} alt="" />
        <div className={userStyle.description}>
            <h2 className={userStyle.username}>{username}</h2>
            <p className={userStyle.excerpt}>{excerpt}</p>
        </div>
    </div>
)

export default () => (
    <Container>
        <Header headerText={'About CSS Modules'}></Header>
        <User
            username="Jane Doe"
            avatar="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"
            excerpt="I'm Jane Doe. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        />
        <User
            username="Bob Smith"
            avatar="https://s3.amazonaws.com/uifaces/faces/twitter/vladarbatov/128.jpg"
            excerpt="I'm Bob Smith, a vertically aligned type of guy. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        />
    </Container>
)
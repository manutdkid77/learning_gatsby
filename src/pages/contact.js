import React from "react"
import Header from "../components/header"
import { Link } from "gatsby"

export default () => (
    <div>
        <Header headerText={'Contact Page'}></Header>
        <Link to='/'>Go to Home Page</Link>
    </div>
)
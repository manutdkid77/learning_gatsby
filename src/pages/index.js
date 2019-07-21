import React from "react"
import Header from "../components/header"
import {Link} from "gatsby"

export default () =>
    <div>
        <Header headerText={'Index Page'}></Header>
        <div style={{ fontSize: '1em', 'color': 'tomato' }}>
            <p>Hello Nathaniel!</p>
            <p>React 💗 Gatsby</p>
            <Link to="/contact">Contact</Link>
        </div>
    </div>

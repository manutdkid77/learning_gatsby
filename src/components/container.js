import React from "react"
import containerStyle from "../styles/container.module.css"

export default ({ children }) => (
    <div className={containerStyle.container}>
        {children}
    </div>
)

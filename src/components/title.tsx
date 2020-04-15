import React from "react"
import SEO from "./seo"
import bg from "../images/title_bg.jpg"

const title: React.SFC = ({children}) => (
    <>
        <SEO title={children as string} />
        <h1 style={{
            fontFamily: `"DM Serif Display", serif`,
            backgroundClip: `text`,
            WebkitBackgroundClip: `text`,
            backgroundImage: `url("${bg}")`,
            color: `transparent`
            }}>
        {children}
        </h1>
    </>
)
export default title

/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import {useStaticQuery, graphql, Link} from "gatsby"
import {Container, Row, Col} from "react-bootstrap"
import {MDXProvider} from "@mdx-js/react"
import Header from "./header"
import Code from "./code"
import {Helmet} from "react-helmet"

const components = {
    code: Code
}

const Layout: React.SFC = ({children}) => {
    const data = useStaticQuery(graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
        allSitePage(filter: {context: {frontmatter: {title: {glob: "*"}}}}) {
          nodes {
            id
            path
            context {
              frontmatter {
                title
              }
            }
          }
        }
      }
    `)
    return (
        <>
            <Helmet>
                <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Merriweather:ital,wght@0,400;0,700;1,400;1,700&family=Noto+Serif+JP&family=Noto+Serif+KR&family=Noto+Serif+SC&display=swap" rel="stylesheet" />
            </Helmet>
            <Container>
                <Header siteTitle={data.site.siteMetadata.title} />
                <Row style={{marginTop: 20}}>
                    <Col md={2}>
                        <ul className="d-none d-md-block">
                            {
                                data.allSitePage.nodes.map((node: any) => (
                                    <li key={node.id}>
                                        <Link to={node.path}>
                                            {node.context.frontmatter.title}
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </Col>
                    <Col md={10}>
                        <main style={{fontFamily: `"Merriweather", serif`}}>
                            <MDXProvider components={components}>{children}</MDXProvider>
                        </main>
                        <footer>
                            &copy; {new Date().getFullYear()}, TANIGUCHI Masaya, All Rights Reserved
                        </footer>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Layout

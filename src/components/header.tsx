import React from "react"
import {Navbar, Nav} from "react-bootstrap"
import {Link} from "gatsby"

const Header: React.SFC<{siteTitle: string}> = ({siteTitle}) => {
    return (
        <Navbar variant="light" bg="white">
            <Navbar.Brand href="/">
                {siteTitle}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/">Index</Nav.Link>
                    <Nav.Link as={Link} to="/profile/">Profile</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
};

export default Header

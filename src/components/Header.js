import React, { Component } from "react"
import { Container, Navbar, Nav } from 'react-bootstrap'

class Header extends Component {
    render(){
        const styles = {
            fontSize: "20px",
            paddingLeft: "20px",
            paddingRight: "20px"
        }

        return (
            <Navbar sticky = "top" expand = "sm" variant = "dark" bg = "dark">
                <Container>
                    <Navbar.Brand href = "#intro" style = {{fontSize: "25px"}}> 
                        Vaishali Thakur
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls = "responsive-navbar-nav" />
                    <Navbar.Collapse className = "justify-content-end">
                        <Nav className = "mr-md-2">
                            <Nav.Link href = "#about" style = {styles}> About </Nav.Link>
                            <Nav.Link href = "#experience" style = {styles}> Experience </Nav.Link>
                            <Nav.Link href = "#skills" style = {styles}> Skills </Nav.Link>
                            <Nav.Link href = "#projects" style = {styles}> Projects </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}

export default Header;
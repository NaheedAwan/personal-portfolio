// import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";
import { Navbar, Nav, Container } from 'react-bootstrap'

export default function NavBar() {
    
    return (

        <div className="sticky-nav container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <>
                <Navbar bg="primary" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">Needo's Page</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="#about">About Me</Nav.Link>
                            <Nav.Link href="#project">Projects</Nav.Link>
                            <Nav.Link href="#contact">Contact Us</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>



            </>
        </div>
    )
}
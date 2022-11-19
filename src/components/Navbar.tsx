import { Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export function Navbar() {
    return (
        <NavbarBs sticky="top" className="bg-white shadow-sm mb-3">
            <Container>
                <Nav>
                    <Nav.Link to="/" as={NavLink}>
                        Home
                    </Nav.Link>
                    <Nav.Link to="/Services" as={NavLink}>
                        Services
                    </Nav.Link>
                    <Nav.Link to="/Plans" as={NavLink}>
                        Plans
                    </Nav.Link>
                    <Nav.Link to="/Blogs" as={NavLink}>
                        Blogs
                    </Nav.Link>
                    <Nav.Link to="/AboutUs" as={NavLink}>
                        About Us
                    </Nav.Link>
                    <Nav.Link to="/Careers" as={NavLink}>
                        Careers
                    </Nav.Link>
                </Nav>
                <Form className="d-flex">
                    <Button variant="primary">Client Area</Button>
                </Form>
            </Container>
        </NavbarBs>
    )
}

export default Navbar;
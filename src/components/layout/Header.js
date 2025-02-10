import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="shadow-sm fixed-top w-100">
      <Container fluid>
        <Navbar.Brand as={Link} to="/" className="fw-bold text-uppercase">
          Hotelaria
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="mx-2">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/reservation/list" className="mx-2">
              Reservas
            </Nav.Link>
            <Nav.Link as={Link} to="/guest/list" className="mx-2">
              Hóspedes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;

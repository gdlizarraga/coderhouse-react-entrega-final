import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import CartWidgetIcons from "./CartWidgetIcons";
import { NavLink } from "react-router-dom";
import "../css/NavBarBootstrap.css";

function NavBarBootstrap() {
  return (
    <Navbar expand="lg" className="bg-dark navbar-dark">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          <img
            src="/logo.png"
            alt="Logo"
            className="d-inline-block align-top"
            style={{ marginRight: "8px" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">
              Home
            </Nav.Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item
                className="dropdown-red-bg-hover"
                as={NavLink}
                to="/categoria/electronica"
              >
                Electrónica
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                className="dropdown-red-bg-hover"
                as={NavLink}
                to="/categoria/ropa"
              >
                Ropa
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                className="dropdown-red-bg-hover"
                as={NavLink}
                to="/categoria/hogar"
              >
                Hogar
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={NavLink} to="/indicaciones">
              Indicaciones
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <CartWidgetIcons />
      </Container>
    </Navbar>
  );
}

export default NavBarBootstrap;

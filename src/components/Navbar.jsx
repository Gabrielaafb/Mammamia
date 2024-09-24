import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext"; 

const NavbarApp = () => {
  const { totalAmount } = useContext(CartContext);
  const { token, logout } = useContext(UserContext); 

  return (
    <Navbar
      className="barranav"
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
    >
      <Container>
        <Navbar.Brand style={{ color: "#fff", textShadow: "0 0 10px #03bcf4" }}>
          MAMMA MÍA!
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className="btn btn-outline-secondary ms-3 nav-link">
              🍕 HOME
            </Link>
            {token ? (
              <>
                <Link
                  to="/"
                  className="btn btn-outline-secondary ms-3 nav-link"
                  onClick={logout} 
                >
                  🔒 Logout
                </Link>
                <Link
                  to="/profile"
                  className="btn btn-outline-secondary ms-3 nav-link"
                >
                  🔓 Profile
                </Link>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="btn btn-outline-secondary ms-3 nav-link"
                >
                  🔐 Login
                </Link>
                <Link
                  to="/register"
                  className="btn btn-outline-secondary ms-3 nav-link"
                >
                  🔐 Register
                </Link>
              </>
            )}
          </Nav>
          <Nav>
            <Link
              to="/cart"
              className="btn btn-outline-secondary text-white linkNav nav-link"
            >
              🛒 Total: ${totalAmount.toLocaleString()}
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarApp;

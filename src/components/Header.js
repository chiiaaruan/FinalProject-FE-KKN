import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./../style/header.css";

const Header = () => {
  return (
    <>
      <header>
        <Navbar collapseOnSelect expand="lg" fixed="top" bg="white">
          <Navbar.Brand href="/"><img src="/logo.png" alt="logo"></img> </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto" />
            <Nav>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/inspirations">Insiprations</Nav.Link>
              <Nav.Link href="/about">About Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
    </>
  );
};

export default Header;

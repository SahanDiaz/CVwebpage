import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Button, Container, Form } from "react-bootstrap";

const Navbr = () => {
  const styles = {
    nv: {},
    btn: {
      backgroundColor: "#e53167",
      border: "#fff",
    },
    brand: {
      color: "#3480e3",
    },
    link: {
      color: "#3480e3",
      marginRight: "10px",
    },
  };
  return (
    <>
      <Navbar
        fixed="top"
        bg="light"
        variant="light"
        collapseOnSelect
        expand="lg"
      >
        <Container>
          <Navbar.Brand href="#" style={styles.brand}>
            {" "}
            <img
              src="/logo.png"
              width="auto"
              height="35"
              className="d-inline-block align-top"
              alt="ContactVolet logo"
            />{" "}
            ContactVolet{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="custom-navColor justify-content-end mr-5">
              <Nav.Link style={styles.link} href="#freatures">
                Features
              </Nav.Link>
              <Nav.Link style={styles.link} href="#HowItWorks">
                How it works
              </Nav.Link>
              <Nav.Link style={styles.link} href="#Contact">
                Contact
              </Nav.Link>
            </Nav>
            <Form inline>
              <Button href="#signup" style={styles.btn}>
                Sign up
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navbr;

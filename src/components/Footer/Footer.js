import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
  const styles = {
    footer: {
      backgroundColor: "#365b75",
    },
    body: {
      textAlign: " center",
      margin: 0,
      padding: 0,
    },
    h5: {
      padding: 10,
      margin: 0,
      textAlign: "center",
      color: "#fff",
    },
  };

  return (
    <>
      <div style={styles.footer}>
        <Container>
          <h4 style={styles.h5}>Futuregen Labs</h4>
        </Container>
      </div>
    </>
  );
};

export default Footer;

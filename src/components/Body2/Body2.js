import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Jumbotron, Container, Row, Col, Image, Button } from "react-bootstrap";
import image2 from "../../assets/img/image2.png";

const Body2 = () => {
  const styles = {
    bg: {
      backgroundColor: "#04C3D8",
      marginBottom: 0,
      minHeight: "600px",
      zIndex: -1,
      display: "flex",
    },
    container: {
      marginTop: "auto",
      marginBottom: "auto",
    },
    img: {
      height: "auto",
      maxWidth: "900px",
      width: "100%",
      zIndex: 1,
    },
    col: {},

    h1: { itemAlign: "center", zIndex: 10, color: "#ffffff" },
    btn: {
      backgroundColor: "#e53167",
      border: "#fff",
      marginTop: "15px",
    },
  };

  return (
    <>
      <Jumbotron fluid style={styles.bg}>
        <Container fluid="md" style={styles.container}>
          <Row>
            <Col sm={6} md={7} lg={8} xl={8}>
              <Image src={image2} style={styles.img} />
            </Col>
            <Col style={styles.col} sm={6} md={5} lg={4} xl={4}>
              <h1 style={styles.h1}>About</h1>
              <h4 style={styles.h1}>It's easy to find locations,</h4>
              <h4 style={styles.h1}>and already contained</h4>
              <h4 style={styles.h1}>many locations</h4>
              <Button style={styles.btn} href="#signup">
                Get Started
              </Button>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    </>
  );
};

export default Body2;

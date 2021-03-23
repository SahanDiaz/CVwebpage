import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Jumbotron, Container, Row, Col, Image, Button } from "react-bootstrap";
import image1 from "../../assets/img/image1.png";


const Body1 = () => {
  const styles = {
    bg: {
      backgroundColor: "#049CD8",
      marginTop: "61px",
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
      maxHeight: "533px",
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
            <Col style={styles.col} sm={2} md={3} lg={3} xl={2}>
              <h1 style={styles.h1}>An Application to Contact all</h1>
              <Button style={styles.btn} href="#signup">
                Get Started
              </Button>
            </Col>
            <Col sm={10} md={9} lg={9} xl={10}>
              <Image src={image1} style={styles.img} />
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    </>
  );
};

export default Body1;

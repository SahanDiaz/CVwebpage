import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Jumbotron, Container, Row, Col, Image, Button } from "react-bootstrap";
import image5 from "../../assets/img/image5.png";

const Body5 = () => {
  const styles = {
    bg: {
      backgroundColor: "#CDF2EE",
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

    h1: { itemAlign: "center", zIndex: 10, color: "#000000" },
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
            <Col style={styles.col} sm={5} md={5} lg={6} xl={5}>
              <h1 style={styles.h1}>More..</h1>
              <h4 style={styles.h1}>To advertise business locations.</h4>
              <h4 style={styles.h1}>
                To find the nearest and most suitable locations.
              </h4>
              <Button style={styles.btn} href="#signup">
                Get Started
              </Button>
            </Col>
            <Col sm={7} md={7} lg={6} xl={7}>
              <Image src={image5} style={styles.img} />
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    </>
  );
};

export default Body5;

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Jumbotron, Container, Row, Col, Image, Button } from "react-bootstrap";
import image3 from "../../assets/img/image3.png";

const Body3 = () => {
  const styles = {
    bg: {
      backgroundColor: "#04D8C3",
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
            <Col style={styles.col} sm={7} md={6} lg={6} xl={5}>
              <h1 style={styles.h1}>Why We're Using ContactVolet</h1>
              <h4 style={styles.h1}>To find most suitable locations.</h4>
              <h4 style={styles.h1}>
                To promote your business for required customers.
              </h4>
              <h4 style={styles.h1}>To advertise your business details</h4>
              <h5 style={styles.h1}>
                (opening hours, price list, promotions, etc..)
              </h5>
              <Button style={styles.btn} href="#signup">
                Get Started
              </Button>
            </Col>
            <Col sm={5} md={6} lg={6} xl={7}>
              <Image src={image3} style={styles.img} />
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    </>
  );
};

export default Body3;

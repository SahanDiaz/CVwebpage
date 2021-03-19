import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Jumbotron, Container, Row, Col, Image, Button } from "react-bootstrap";
import image6 from "../../assets/img/image6.png";

const Body6 = () => {
  const styles = {
    bg: {
      backgroundColor: "#EFEFEF",
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

    h1: { itemAlign: "center", zIndex: 10, color: "#D33F77" },
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
            <Col sm={6} md={7} lg={7} xl={8}>
              <Image src={image6} style={styles.img} />
            </Col>
            <Col style={styles.col} sm={6} md={5} lg={5} xl={4}>
              <h1 style={styles.h1}>Ready To </h1>
              <h1 style={styles.h1}>Advertise your</h1>
              <h1 style={styles.h1}>Business</h1>
              <h3 style={styles.h1}>Download App &</h3>
              <h3 style={styles.h1}>Register your business with</h3>
              <h3 style={styles.h1}>"ad wall"</h3>
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

export default Body6;

import React from "react";
import { Card, Carousel, Col, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./../style/landing.css";
import Header from "../components/Header";
import Foot from "../components/Footer";

const Landing = () => {
  return (
    <>
      <Header />
      <Container>
        <Carousel fade>
          <Carousel.Item>
            <img className="d-block w-100" src="./1.jpg" alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src="./2.jpg" alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src="./3.jpg" alt="Third slide" />
          </Carousel.Item>
        </Carousel>
      </Container>

      <div className="content">
        <Container>
          <Row>
            <Col lg={5} className="description">
              <div className="information">
                <h1>Room Inspiration</h1>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
            </Col>
            <Col lg={7} className="room">
              <img src="./room.jpg" alt="room"></img>
            </Col>
          </Row>

          <div className="choose">
            <h1>Rooms</h1>
            <div className="choose-card">
              <Row>
                <Col lg={4} style={{display:"flex", justifyContent:"flex-start"}}>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src="./1.jpg" />
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col lg={4} style={{display:"flex", justifyContent:"center"}}>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src="./2.jpg" />
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col lg={4} style={{display:"flex", justifyContent:"flex-end"}}>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src="./3.jpg" />
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </div>
          </div>
        </Container>
      </div>

      <Foot />
    </>
  );
};

export default Landing;

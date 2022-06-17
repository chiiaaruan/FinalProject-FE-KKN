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
                  There are many places and objects where you can find inspiration for
                  interior design projects. Some are obvious while others might be unique
                  to the theme of your design.
                  The best way to find inspiration for interior design is to step outside
                  your normal boundaries of creating and designing. Delve into a new
                  expression through nature, art, or other medium and discover a renewal of
                  excitement to create beautiful home designs.
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
              <Row xs={1} md={3}>
                <Col lg={4} style={{display:"flex", justifyContent:"flex-start"}}>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src="./monochrome.jpg" />
                    <Card.Body>
                      <Card.Title>Monochrome</Card.Title>
                      <Card.Text>
                        <b>Monochrome</b> rooms, or <i>spaces in black-and-white</i> or varying tones
                        of one color, have long been used by designers to add drama and
                        impact in homes. It's a daring approach to color that's daunting
                        at first.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col lg={4} style={{display:"flex", justifyContent:"center"}}>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src="./urban.jpg" />
                    <Card.Body>
                      <Card.Title>Urban</Card.Title>
                      <Card.Text>
                        <b>Urban</b> interior design <i>blends elements of contemporary and modern</i>
                        to having a softer, more comfortable look than industrial design
                        styles, urban design embraces warehouse conversions and loft
                        environments as its foundation.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col lg={4} style={{display:"flex", justifyContent:"flex-end"}}>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src="./multicolored.jpg" />
                    <Card.Body>
                      <Card.Title>Multi-Colored</Card.Title>
                      <Card.Text>
                        <b>Multi-colored</b>, or <i>adding colors make an ordinary room dazzle</i> in an instant.
                        It can be a lot of fun to embrace different colors combined for your interiors
                        Colors make a room alive. Even a small amount of it can make a big
                        impact to your neutral walls.
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

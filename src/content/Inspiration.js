import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Foot from "../components/Footer";
import Header from "../components/Header";
import "./../style/inspiration.css";
import axios from "axios";

const Inspiration = () => {
  const [roomList, setRoomList] = useState([]);

  useEffect(() => {
    allRoom();
  }, []);

  const allRoom = () => {
    axios.get("/api/room").then((response) => {
      console.log(response);
      // setAccountList(response.data);
    });
  };
  return (
    <>
      <Header />
      <Container>
        <div className="inspir">
          <Row xs={1} md={3} className="inspiration-page g-4 border-white">
            <Col>
              <Card>
                <Card.Img variant="top" src="./1.jpg" />
                <Card.Body>
                  <Card.Title>Living Room</Card.Title>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card>
                <Card.Img variant="top" src="./1.jpg" />
                <Card.Body>
                  <Card.Title>Dining Room</Card.Title>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card>
                <Card.Img variant="top" src="./1.jpg" />
                <Card.Body>
                  <Card.Title>Bedroom</Card.Title>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card>
                <Card.Img variant="top" src="./1.jpg" />
                <Card.Body>
                  <Card.Title>Kitchen Room</Card.Title>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card>
                <Card.Img variant="top" src="./1.jpg" />
                <Card.Body>
                  <Card.Title>Playground</Card.Title>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card>
                <Card.Img variant="top" src="./1.jpg" />
                <Card.Body>
                  <Card.Title>Family Room</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>

      <Foot />
    </>
  );
};

export default Inspiration;

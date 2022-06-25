import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "./../style/inspiration.css";
import axios from "axios";

const Inspiration = () => {
  const [roomList, setRoomList] = useState([]);
  const [setId] = useState([]);

  useEffect(() => {
    allRoom();
  }, []);

  const allRoom = () => {
    axios.get("/api/room").then((response) => {
      setRoomList(response.data);
    });
  };
  return (
    <>
      <Header />
      <Container>
        <div className="inspir">
        <Row xs={1} md={3} className="inspiration-page g-4 border-white">
          {roomList.map((item) => {
            return (
                <Col>
                  <Card  >
                    <Card.Img variant="top" src={`./${item.image}`} />
                    <Card.Body>
                      <Button 
                      onClick={() => {
                        setId(item.id)
                        window.location.href = `/funiture/${item.id}`;
                      }}
                      value={item.id}>{item.room_name}</Button>
                    </Card.Body>
                  </Card>
                </Col>
             
            );
          })}
           </Row>

          {/* <Row xs={1} md={3} className="inspiration-page g-4 border-white">
            <Col>
              <Card>
                <Card.Img variant="top" src="./living-room.jpg" />
                <Card.Body>
                {roomList.map((item) => {
                    return <Button value={item.id}>{item.room_name}</Button>;
                  })}
                  <Button variant="outline-primary">Living Room</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card>
                <Card.Img variant="top" src="./dining-room.jpg" />
                <Card.Body>
                <Button variant="outline-primary">Dining Room</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card>
                <Card.Img variant="top" src="./bedroom.jpg" />
                <Card.Body>
                <Button variant="outline-primary">Bedroom</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card>
                <Card.Img variant="top" src="./kitchen-room.jpg" />
                <Card.Body>
                <Button variant="outline-primary">Kitchen Room</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card>
                <Card.Img variant="top" src="./playground.jpg" />
                <Card.Body>
                <Button variant="outline-primary">Playground</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card>
                <Card.Img variant="top" src="./workspaces.jpg" />
                <Card.Body>
                <Button variant="outline-primary">Workspaces</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row> */}
        </div>
      </Container>

      <Footer />
    </>
  );
};

export default Inspiration;

import React, { useState, useEffect } from "react";
import Footer from '../components/Footer'
import Header from '../components/Header'
import { Container, Row, Col, Card } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css";
import "./../style/funiture.css";
import axios from "axios";

const Funiture = () => {
  const [furnitureList, setFurnitureList] = useState([]);
  const [id, setKid] = useState("");

  useEffect(() => {
    var baseUrl = window.location.href;
    var id = baseUrl.substring(baseUrl.lastIndexOf("/") + 1);
    setKid(id);
    allFurniture(id);
  }, []);

  const allFurniture = (id) => {
    axios.get("/api/furniture/" + id).then((response) => {
      setFurnitureList(response.data);
    });
  };
  return (
    <>
    <Header />
      <Container>
        <div className="choose">
          <h1>Funiture</h1>
          <div className="choose-card">
          <Row xs={1} md={3} className="inspiration-page g-4 border-white">
          {Object.keys(furnitureList).map((item, i) => {
            return (
                <Col>
                  <Card  >
                    <Card.Img variant="top" 
                    src="/1.jpg"
                    // src={`./${item.image}`} 
                    />
                    <Card.Body>
                      <Card.Text>
                      {furnitureList[item]}
                    </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
            );
          })}
           </Row>
          </div>
          </div>
      </Container>
    <Footer />
    </>
  )
}

export default Funiture
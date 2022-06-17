import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { Container, Row, Col, Card } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css";
import "./../style/funiture.css";

const Style = () => {
  return (
    <>
    <Header />
      <Container>
        <div className="choose">
          <h1>Funiture</h1>
          <div className="choose-card">
            <Row xs={1} md={3}>
              <Col lg={4} style={{display:"flex", justifyContent:"flex-star"}}>
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
    <Footer />
    </>
  )
}

export default Style
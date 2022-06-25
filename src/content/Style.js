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
          <h1>Style</h1>
          <div className="choose-card">
            <Row xs={1} md={3}>
              <Col lg={4} style={{display:"flex", justifyContent:"flex-star"}}>
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src="./monochrome.jpg" />
                  <Card.Body>
                    <Card.Title>Monochrome</Card.Title>
                    <Card.Text>
                        Spaces in black-and-white or varying tones of one color.
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
                      Blends elements of contemporary and modern to having a softer and more comfortable look.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={4} style={{display:"flex", justifyContent:"flex-end"}}>
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src="./multicolored.jpg" />
                  <Card.Body>
                    <Card.Title>Multi-colored</Card.Title>
                    <Card.Text>
                      Adding and combined different colors to make an ordinary room dazzle.
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
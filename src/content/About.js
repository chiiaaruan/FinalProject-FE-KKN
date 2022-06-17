import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { Container, Col, Card, Row } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css";
import "./../style/about.css";

const About = () => {
  return (

      <>
      <Header />
        <div className='about'>
          <h3>The Developers</h3>
          <div className='about-dev'>
            <Container>
              <Row md={2}  style={{marginTop: 25}}>
                <Col lg={4} style={{display:"flex", justifyContent:"space-between"}}>
                  <Card style={{ width: "20rem", height: "20rem" }}>
                    <Card.Img variant="top" src="./about-delvin.jpg" />
                    <Card.Body>
                      <Card.Title>Delvin</Card.Title>
                    </Card.Body>
                  </Card>
                </Col>
                <Col lg={4} style={{display:"flex", justifyContent:"space-between"}}>
                <Card style={{ width: "20rem", height: "20rem" }}>
                    <Card.Img variant="top" src="./about-chia.jpg" />
                    <Card.Body>
                      <Card.Title>Chia</Card.Title>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
        </div>

        <div className='about'>
          <h3>The Mentors</h3>
          <div className='about-mentor'>
            <Container>
              <Row xs={1} md={3}>
                <Col lg={4} style={{display:"flex", justifyContent:"space-between"}}>
                  <Card style={{ width: "20rem", height: "20rem", marginBottom: 50}}>
                    <Card.Img variant="top" src="./about-fiqri.jpg" />
                    <Card.Body>
                      <Card.Title>Fiqri Pratama</Card.Title>
                      <Card.Text>
                        &lang; Algoritma Pemrograman: Javascript &rang;
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col lg={4} style={{display:"flex", justifyContent:"space-between"}}>
                  <Card style={{ width: "20rem", height: "20rem", marginBottom: 50 }}>
                    <Card.Img variant="top" src="./about-dwi.jpg" />
                    <Card.Body>
                      <Card.Title>Dwiyanto Saputra</Card.Title>
                      <Card.Text>
                        &lang; HTML &amp; VCS: Git &rang;
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col lg={4} style={{display:"flex", justifyContent:"space-between"}}>
                  <Card style={{ width: "20rem", height: "20rem", marginBottom: 50 }}>
                    <Card.Img variant="top" src="./about-helena.jpg" />
                    <Card.Body>
                      <Card.Title>Helena Natanael</Card.Title>
                      <Card.Text>
                        &lang; CSS &amp; Bootstrap &rang;
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col lg={4} style={{display:"flex", justifyContent:"space-between"}}>
                  <Card style={{ width: "20rem", height: "20rem", marginBottom: 50 }}>
                    <Card.Img variant="top" src="./about-stev.jpg" />
                    <Card.Body>
                      <Card.Title>Steven Kie</Card.Title>
                      <Card.Text>
                        &lang; MySQL &rang;
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col lg={4} style={{display:"flex", justifyContent:"space-between"}}>
                  <Card style={{ width: "20rem", height: "20rem", marginBottom: 50 }}>
                    <Card.Img variant="top" src="./about-romi.jpg" />
                    <Card.Body>
                      <Card.Title>M. Romi Ario Utomo</Card.Title>
                      <Card.Text>
                        &lang; Node.js &amp; Express.js &rang;
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col lg={4} style={{display:"flex", justifyContent:"space-between"}}>
                  <Card style={{ width: "20rem", height: "20rem", marginBottom: 50 }}>
                    <Card.Img variant="top" src="./about-ilham.jpg" />
                    <Card.Body>
                      <Card.Title>Ilham Kurnia Syuriadi</Card.Title>
                      <Card.Text>
                        &lang; React.js &rang;
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col lg={4} style={{display:"flex", justifyContent:"space-between"}}>
                  <Card style={{ width: "20rem", height: "20rem", marginBottom: 50 }}>
                    <Card.Img variant="top" src="./about-bagas.jpg" />
                    <Card.Body>
                      <Card.Title>Priambudi Lintang Bagaskara</Card.Title>
                      <Card.Text>
                        &lang; Testing, Deployment, &amp; Security &rang;
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col lg={4} style={{display:"flex", justifyContent:"space-between"}}>
                  <Card style={{ width: "20rem", height: "20rem", marginBottom: 50 }}>
                    <Card.Img variant="top" src="./about-arkan.jpg" />
                    <Card.Body>
                      <Card.Title>Arkan Fauzan Ayyasyi</Card.Title>
                      <Card.Text>
                        &lang; Konsultasi dibimbing FWD &rang;
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      <Footer />
      </>
  )
}

export default About
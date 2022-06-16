import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import {
  Container,
  Button,
  Row,
  Col,
  Table
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./../style/dashboard.css";

const Dashboard = () => {
  return (
    <>
    <Header />
      <div className='atas'>
        <Container>
          <Row className="justify-content-md-center">
            <Col md={4}>
              <h3>Tables of Rooms</h3>
            </Col>
            <Col md={{ span: 4, offset: 4 }}>
              <Button type="button">
                + Add Room
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
      <div className='bawah'>
        <Container>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th> </th>
              <th>Room Type</th>
              <th>Room Style</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
          </tbody>
        </Table>
        </Container>
      </div>
    <Footer />
    </>
  )
}

export default Dashboard
import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import {
  Container,
  Row,
  Col,
  Table
} from "react-bootstrap";
import {  Button } from "reactstrap"
import "bootstrap/dist/css/bootstrap.min.css";
import "./../style/dashboard.css";

const Dashboard = () => {
  return (
    <>
    <Header />
      <div className='title'>
        <Container>
          <Row className="justify-content-md-center">
            <Col md={4}>
              <h3>Tables of Rooms</h3>
            </Col>
          </Row>
        </Container>
      </div>
      <div className='bawah'>
        <Container>
          <div className='addroom'>
            <Button color="primary" type="button">
              + Add Room
            </Button>
            <Button color="link" type="button">
              Logout
            </Button>
          </div>
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
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>
                  <div className="button-group">
                    <Button className="btn" color="warning" size="sm">
                      Edit
                    </Button>
                    <Button className="btn" color="danger" size="sm">
                      Delete
                    </Button>
                </div>
                </td>
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
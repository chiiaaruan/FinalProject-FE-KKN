import React, { useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import {
  Container,
  Row,
  Col,
  Table,
  Modal,
  Form
} from "react-bootstrap";
import {  Button } from "reactstrap"
import "bootstrap/dist/css/bootstrap.min.css";
import "./../style/dashboard.css";

const Dashboard = () => {
  const [showEdit, setShowEdit] = useState(false);
  const [show, setShow] = useState(false);

  const handleCloseEdit = () => setShowEdit(false);
  const handleShowEdit = () => setShowEdit(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
                    <div>
                      <Button className="btn" color="warning" size="sm" onClick={handleShowEdit}>
                        Edit
                      </Button>
                      <Modal show={showEdit} onHide={handleCloseEdit}>
                        <Modal.Header closeButton>
                          <Modal.Title>Modal heading</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <div className="edit-room">
                            <h5>Edit Room</h5>
                            <Form>
                              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Type</Form.Label>
                                <Form.Select aria-label="Default select example">
                                  <option>Choose Room Type</option>
                                  <option value="1">Living Room</option>
                                  <option value="2">Dining Room</option>
                                  <option value="3">Bedroom</option>
                                  <option value="4">Kitchen Room</option>
                                  <option value="4">Playground</option>
                                  <option value="4">Workspace</option>
                                </Form.Select>
                              </Form.Group>
                              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Style</Form.Label>
                                <Form.Select aria-label="Default select example">
                                  <option>Choose Room Style</option>
                                  <option value="1">Monochrome</option>
                                  <option value="2">Urban</option>
                                  <option value="4">Colorful</option>
                                </Form.Select>
                              </Form.Group>
                            </Form>
                          </div>
                          <div className="edit-funiture">
                            <h5>Edit funiture</h5>
                            <Form>
                              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Furniture" />
                              </Form.Group>
                              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Price</Form.Label>
                                <Form.Control type="text" placeholder="Price" />
                              </Form.Group>
                              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Description</Form.Label>
                                <Form.Control type="text" placeholder="Description" />
                              </Form.Group>
                            </Form>
                          </div>   
                        </Modal.Body>
                        <Modal.Footer>
                          <Button className="btn" outline color="danger" size="sm" onClick={handleCloseEdit}>Cancel</Button>
                          <Button className="btn" color="info" size="sm" onClick={handleCloseEdit}>Save Changes</Button>
                        </Modal.Footer>
                      </Modal>
                    </div>
                    <Button className="btn" color="danger" size="sm" onClick={handleShow}>
                      Delete
                    </Button>
                    <Modal show={show} onHide={handleClose}>
                      <Modal.Header closeButton>
                        <Modal.Title>Delete Room</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>Are you sure want to delete this room ?</Modal.Body>
                      <Modal.Footer>
                        <Button className="btn" outline color="danger" size="sm" onClick={handleClose}>Cancel</Button>
                        <Button className="btn" color="danger" size="sm" onClick={handleClose}>Delete</Button>
                      </Modal.Footer>
                    </Modal>
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
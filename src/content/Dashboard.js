import React, { useState, useEffect } from "react";
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
import axios from "axios";


const Dashboard = () => {
  const [roomList, setRoomList] = useState([]);
  // const [styleList, setStyleList] = useState([]);
  const [showEdit, setShowEdit] = useState(false);
  const [show, setShow] = useState(false);

  const handleCloseEdit = () => setShowEdit(false);
  const handleShowEdit = () => setShowEdit(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAdd = () => {
    window.location.href = '/form';
  };

  useEffect(() => {
    allRoom();
    // allStyle();
    allFuniture();
  }, []);

  //pakai dummy
  const [funitures, setFunitures] = useState([])

  const allRoom = () => {
    axios
      .get("/api/room")
      .then((response) => {
        setRoomList(response.data);
      })
      .catch((error) => {
        // alert("Error:", error);
      });
  };

  // const allStyle = () => {
  //   axios
  //     .get("/api/furniture")
  //     .then((response) => {
  //       setStyleList(response.data);
  //     })
  //     .catch((error) => {
  //       // alert("Error:", error);
  //     });
  // };

  const allFuniture = () => {
    // pakai dummy karena belum tau respond body dari BE - nya apa
    let response = {
      data : {
        "funitures" : [
          {
            "id" : 1,
            "room" : "Living Room",
            "name" : "Sofa"
          },
          {
            "id" : 2,
            "room" : "Dining Room",
            "name" : "Meja"
          },
          {
            "id" : 3,
            "room" : "Kitchen Room",
            "name" : "Lemari"
          },
          {
            "id" : 4,
            "room" : "Playground Room",
            "name" : "Pot Bunga"
          },
          {
            "id" : 5,
            "room" : "Workspaces",
            "name" : "Kursi"
          },
          {
            "id" : 6,
            "room" : "Bedroom",
            "name" : "Tempat Tidur"
          }
        ]
      }
    }

    //untuk munculin data ketika sukses
    setFunitures(response.data.funitures)
    console.log(response.data)
  }

  // const editFuniture = (id) => {
  //   let filtered = funitures.map(val => `val.id===id`)
  //   console.log(filtered[0].name)
  // }

  const handleLogout = () => {
    //cara pertama, langsung hapus aja => di BE jadi ada double token krna yg kehapus di FE aja
    //cara kedua, ngehit api BE => dipake untuk token yg di generate secara manual
    window.localStorage.removeItem('token')
    window.location.href = '/login'
  }

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
            <Button color="primary" type="button" onClick={handleAdd}>
              + Add Room
            </Button>
            <Button color="link" type="button" onClick={handleLogout}>
              Logout
            </Button>
          </div>
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>Room Type</th>
                <th>Funiture</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
                {funitures.map((funiture, index) =>{
                  return (
                    <tr>
                      <td>{funiture.room}</td>
                      <td>{funiture.name}</td>
                      <td>
                        <div className="button-group">
                          <div key={index}>
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
                                        {roomList.map((item) => {
                          return <option value={item.id}>{item.room_name}</option>;
                        })}
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
                  )
                })}
            </tbody>
          </Table>
        </Container>
      </div>
    <Footer />
    </>
  )
}

export default Dashboard
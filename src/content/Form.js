import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Container, Form } from "react-bootstrap";

const AddForm = () => {
  return (
    <>
      <Header />
      <Container>
        <div>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Room</Form.Label>
              <Form.Select aria-label="Default select example">
                <option>Choose Room Type</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Form.Group>
          </Form>
        </div>

        <div>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Room Type</Form.Label>
              <Form.Control type="text" placeholder="Room Type" />
            </Form.Group>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Choose your image</Form.Label>
              <Form.Control type="file" />
            </Form.Group>
          </Form>
        </div>

        <div>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Furniture</Form.Label>
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
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Choose your image</Form.Label>
              <Form.Control type="file" />
            </Form.Group>
          </Form>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default AddForm;

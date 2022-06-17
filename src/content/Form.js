import React from "react";
import Header from '../components/Header'
import { Container, Form } from "react-bootstrap";


const AddForm = () => {
  return (
    <>
      <Header />
      <Container>
        <div className="form-detail" style={{marginTop: 150}}>
          <h4>Room Details</h4>
          <div>
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
                  <option value="3">Minimalist</option>
                  <option value="4">Colorful</option>
                </Form.Select>
              </Form.Group>
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Choose your image</Form.Label>
                <Form.Control type="file" />
              </Form.Group>
            </Form>
          </div>
        </div>

        <div className="form-funiture">
          <h4>Funitures Details</h4>
          <div>
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
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Choose your image</Form.Label>
                <Form.Control type="file" />
              </Form.Group>
            </Form>
          </div>
        </div>        
      </Container>
    </>
  );
};

export default AddForm;

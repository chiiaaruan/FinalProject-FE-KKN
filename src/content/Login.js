import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import {
  Container,
  Card,
  Form,
  Button
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./../style/login.css";

const clicked = () => {
  window.location.href = '/dashboard'
  // console.log("test")
}

const Login = () => {
  return (
      <>
      <Header />
        <Container>
          <Card style={{ width: "20rem", height: "20rem" }}>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button variant="primary" type="button" onClick={clicked}>
                Submit
              </Button>
            </Form>  
          </Card>
        </Container>
      <Footer />
      </>
  )
}

export default Login
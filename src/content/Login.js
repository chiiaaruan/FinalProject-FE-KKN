import React from 'react'
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
      <Container>
        <div className='login'>
          <Card style={{ width: "20rem", height: "20rem" }}>
            <h4>  Login Room Inspiration </h4>
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
              <Button variant="primary" type="button" onClick={clicked}>
                Login
              </Button>
            </Form>  
          </Card>
        </div>
      </Container>
      </>
  )
}

export default Login
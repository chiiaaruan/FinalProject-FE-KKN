import React, { useState } from "react";
import {
  Container,
  Card,
  Form,
  Button
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./../style/login.css";


const Login = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const dummy_account = {
    email : 'admin@email.com',
    password : 'admin'
  }

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  }

  const onChangePassword = (event) => {
    setPassword(event.target.value); 
  }

  
  const clicked = () => {
    if (email.indexOf('@')===-1) {
      setErrorMessage('Format email yang dimasukkan salah.');
    }
    else if (password.length<3) {
      setErrorMessage('Password harus minimal 3 huruf.');
    }
    else {
      setErrorMessage('');
    }

    // lakukan request axios untuk validasi email dan password
    // tapi di skip karena pake dummy
    // axios.post('/', {username:email,pass})
    // .then()
    // .catch()

    // karena pake dummy, check by dummy
    if (email !== dummy_account.email || password !== dummy_account.password) {
      setErrorMessage('Email atau password tidak sesuai');
    }
    else {
      // ceritanya setelah di validasi terus dapet token 
      let token = 'akfnalifgaifkdsj'
      window.localStorage.setItem('token', token)  //untuk save token
      window.location.href = 'dashboard' // redirect setelah save token ke hal. dashboard
    }
  }

  return (
      <>
      <Container>
        <div className='login'>
          <Card style={{ width: "20rem", height: "20rem" }}>
            <h4>  Login Room Inspiration </h4>
            <Form>
              {errorMessage!=='' ? <p style={{color:"red", fontSize:"12px"}}> {errorMessage} </p> : '' }
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control value={email} onChange={(event)=>onChangeEmail(event)} type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control value={password} onChange={(event)=>onChangePassword(event)} type="password" placeholder="Password" />
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
import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import { Container, Form, Button } from "react-bootstrap";
import axios from "axios";
import Footer from "../components/Footer";
import { addFurniture } from "../repository/DataRepository";

const AddForm = () => {
  const [roomList, setRoomList] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [setTypeId] = useState("");

  const handleType = (e) => {
    setTypeId(e);
  };

  const handleName = (e) => {
    const val = e.target.value;
    setName(val);
  };

  const handlePrice = (e) => {
    const val = e.target.value;
    setPrice(val);
  };

  const handleDescription = (e) => {
    const val = e.target.value;
    setDescription(val);
  };

  // const handleImage = (e) => {
  //   const val = e.target.value;
  //   setImage(val);
  // };

  const handleAdd = (e) => {
    e.preventDefault();
    const newData = {
      // typeId: typeId,
      furnitureName: name,
      description: description,
      price: price,
      image:image
    };
      addFurniture(newData);
      setTypeId("");
      setName("");
      setDescription("");
      setPrice("")
      setImage("")
      console.log(newData);
  };

  useEffect(() => {
    allRoom();
  }, []);

  const allRoom = () => {
    axios
      .get("/api/room")
      .then((response) => {
        setRoomList(response.data);
      })
      .catch((error) => {
        alert("Error:", error);
      });
  };

  return (
    <>
      <Header />
      <Container>
        <div className="form-detail" style={{ marginTop: 150 }}>
          <h4>Room Details</h4>
          <div>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Type</Form.Label>
                <Form.Select aria-label="Default select example" onChange={handleType} onClick={handleType}>
                  <option>Choose Room Type</option>
                  {roomList.map((item) => {
                    return <option value={item.id}>{item.room_name}</option>;
                  })}
                </Form.Select>
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
              </Form.Group>
            </Form>
          </div>
        </div>

        <div className="form-funiture">
          <h4>Funitures Details</h4>
          <div>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>
                  Name
                </Form.Label>
                <Form.Control type="text"  value={name} onChange={handleName} placeholder="Furniture" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Price</Form.Label>
                <Form.Control type="text"  value={price} onChange={handlePrice} placeholder="Price" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Description</Form.Label>
                <Form.Control type="text"  value={description} onChange={handleDescription} placeholder="Description" />
              </Form.Group>
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Choose your image</Form.Label>
                <Form.Control type="file" />
              </Form.Group>
              <Button className="btn" color="warning" size="sm" style={{marginTop: 20}} onClick={handleAdd}>
                        Add New
              </Button>
            </Form>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default AddForm;

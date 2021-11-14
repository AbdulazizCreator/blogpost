import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";
const Common = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [registerData, setRegisterData] = useState({});
  const [loginData, setLoginData] = useState({});
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const openModal2 = () => {
    setIsModalOpen2(true);
  };
  const closeModal2 = () => {
    setIsModalOpen2(false);
  };
  const handleRegister = (e) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };
  const handleLogin = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };
  const submitLogin = () => {
    console.log(loginData);
  };
  const submitRegister = () => {
    console.log(registerData);
  };
  return (
    <div>
      <header>
        <div className="container-fluid bg-warning py-3">
          <div className="container">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <Link to="/">
                  <h3>Maruf's Blog</h3>
                </Link>
              </div>
              <div>
                <Button className="me-3" color="primary" onClick={openModal}>
                  Login
                </Button>
                <Button color="primary" onClick={openModal2}>
                  Register
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>
      {props.children}
      <footer>
        <div className="container-fluid bg-warning">
          <div className="container">
            <p className="text-center py-3 mb-0">Mady by Abdulaziz and Maruf</p>
          </div>
        </div>
      </footer>
      <Modal toggle={closeModal} isOpen={isModalOpen}>
        <ModalHeader toggle={closeModal}>Login</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="exampleUsername">Username</Label>
              <Input
                onChange={handleLogin}
                id="exampleUsername"
                name="username"
                placeholder="username"
                type="text"
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                onChange={handleLogin}
                id="examplePassword"
                name="password"
                placeholder="password"
                type="password"
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={submitLogin}>
            Login
          </Button>
          <Button onClick={closeModal}>Cancel</Button>
        </ModalFooter>
      </Modal>
      <Modal toggle={closeModal2} isOpen={isModalOpen2}>
        <ModalHeader toggle={closeModal2}>Register</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input
                onChange={handleRegister}
                id="exampleEmail"
                name="email"
                placeholder="email"
                type="email"
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleUsername">Username</Label>
              <Input
                onChange={handleRegister}
                id="exampleUsername"
                name="username"
                placeholder="username"
                type="text"
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                onChange={handleRegister}
                id="examplePassword"
                name="password"
                placeholder="password"
                type="password"
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={submitRegister}>
            Register
          </Button>
          <Button onClick={closeModal2}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default Common;

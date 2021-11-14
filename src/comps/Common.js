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
                id="exampleUsername"
                name="username"
                placeholder="username"
                type="text"
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                id="examplePassword"
                name="password"
                placeholder="password"
                type="password"
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={function noRefCheck() {}}>
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
                id="exampleEmail"
                name="email"
                placeholder="email"
                type="email"
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleUsername">Username</Label>
              <Input
                id="exampleUsername"
                name="username"
                placeholder="username"
                type="text"
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                id="examplePassword"
                name="password"
                placeholder="password"
                type="password"
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={function noRefCheck() {}}>
            Register
          </Button>
          <Button onClick={closeModal2}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default Common;

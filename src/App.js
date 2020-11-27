import React from "react";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export default function App() {

  return (
  <Container>
    <h2 class="text-center">Services</h2>
    <Row>
      <Col class="text-center">
        <p>
          <button type="button" class="btn btn-link" data-toggle="modal" data-target="#fullServicesModalLong">
            View full list of services I offer and conditions I treat.
          </button>
        </p>
      </Col>
    </Row>
    <Row>
      <Col>1 of 1</Col>
      <Col>1 of 1</Col>
      <Col>1 of 1</Col>
      <Col>1 of 1</Col>
    </Row>
  </Container>


  );
}

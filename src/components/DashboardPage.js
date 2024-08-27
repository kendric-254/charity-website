import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const DashboardPage = () => {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="6">
          <h2 className="text-center my-4">Dashboard</h2>
          <p className="text-center">Welcome to your dashboard!</p>
          <p className="text-center">You can register as a drug addict, sponsor, or user here.</p>
          <Form>
            <Form.Group controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group controlId="formBasicRole">
              <Form.Label>Role</Form.Label>
              <Form.Control as="select">
                <option>Drug Addict</option>
                <option>Sponsor</option>
                <option>User</option>
              </Form.Control>
            </Form.Group>

            <Button variant="primary" type="submit" className="mt-3">
              Register
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default DashboardPage;

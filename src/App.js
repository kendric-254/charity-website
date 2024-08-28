import React, { useState, useContext } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Button, Container, Badge, Modal } from 'react-bootstrap';
import Home from './components/HomePage';
import About from './components/AboutPage';
import ProgramsPage from './components/ProgramsPage';
import Donate from './components/DonatePage';
import Contact from './components/ContactPage';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import Dashboard from './components/DashboardPage';
import { AuthContext, AuthProvider } from './contexts/AuthContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Import custom styles for further customization
import DonationFormPage from './components/DonationFormPage';
import MpesaConfirmationPage from './components/MpesaConfirmationPage';
import ConfirmationPage from './components/ConfirmationPage';

// Protected Route Component
const ProtectedRoute = ({ element: Component }) => {
  const { isAuthenticated } = useContext(AuthContext);
  return isAuthenticated ? <Component /> : <Navigate to="/login" />;
};

function App() {
  const { isAuthenticated } = useContext(AuthContext);
  const [notificationsCount, setNotificationsCount] = useState(5);

  // Modal States
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  // Handle Modal Show/Hide
  const handleLoginModalShow = () => setShowLoginModal(true);
  const handleLoginModalClose = () => setShowLoginModal(false);
  const handleRegisterModalShow = () => setShowRegisterModal(true);
  const handleRegisterModalClose = () => setShowRegisterModal(false);

  return (
    <AuthProvider>
      <Router>
        <Navbar bg="dark" variant="dark" expand="lg" className="mb-3">
          <Container>
            <Navbar.Brand as={Link} to="/">
              <span className="glowing-heading">Hope's Horizon: A Path to Recovery</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarNav" />
            <Navbar.Collapse id="navbarNav">
              <Nav className="ms-auto">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/about">About</Nav.Link>
                <Nav.Link as={Link} to="/programs">Programs</Nav.Link>
                <Nav.Link as={Link} to="/donate">Donate</Nav.Link>
                <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                <NavDropdown
                  title={
                    <>
                      <i className="fas fa-bell"></i>
                      {notificationsCount > 0 && (
                        <Badge bg="danger" pill className="ms-1">
                          {notificationsCount}
                        </Badge>
                      )}
                    </>
                  }
                  id="notifications-dropdown"
                >
                  <NavDropdown.Item as={Link} to="#">
                    View All Notifications
                  </NavDropdown.Item>
                </NavDropdown>
                {!isAuthenticated ? (
                  <div className="d-flex align-items-center">
                    <Button variant="primary" onClick={handleRegisterModalShow} className="me-2">
                      Register
                    </Button>
                    <Button variant="secondary" onClick={handleLoginModalShow}>
                      Login
                    </Button>
                  </div>
                ) : (
                  <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/* Modals for Login and Register */}
        <Modal show={showLoginModal} onHide={handleLoginModalClose}>
          <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <LoginPage />
          </Modal.Body>
        </Modal>

        <Modal show={showRegisterModal} onHide={handleRegisterModalClose}>
          <Modal.Header closeButton>
            <Modal.Title>Register</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <RegisterPage />
          </Modal.Body>
        </Modal>

        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/programs" element={<ProgramsPage />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/dashboard" element={<ProtectedRoute element={Dashboard} />} />
            <Route path="/donate-form" element={<DonationFormPage />} />
            <Route path="/donate/mpesa" element={<MpesaConfirmationPage />} />
            <Route path="/confirmation" element={<ConfirmationPage />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;

import React, { useState, useContext } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import Home from './components/HomePage';
import About from './components/AboutPage';
import Donate from './components/DonatePage';
import Contact from './components/ContactPage';
import ProgramsPage from './components/ProgramsPage';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage'; // Ensure this component exists
import Dashboard from './components/DashboardPage';
import { AuthContext, AuthProvider } from './contexts/AuthContext'; // Ensure correct import
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap'; // Import Bootstrap Modal

// Protected Route Component
const ProtectedRoute = ({ element, ...rest }) => {
  const { isAuthenticated } = useContext(AuthContext);
  return isAuthenticated ? element : <Navigate to="/login" />;
};

function App() {
  const { isAuthenticated } = useContext(AuthContext);
  const [notificationsCount, setNotificationsCount] = useState(5); // Example count

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
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">Charity Website</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">About</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/programs">Programs</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/donate">Donate</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">Contact</Link>
                </li>
                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="fas fa-bell"></i>
                    {notificationsCount > 0 && (
                      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        {notificationsCount}
                      </span>
                    )}
                  </Link>
                  <ul className="dropdown-menu dropdown-menu-end">
                    <li><Link className="dropdown-item" to="#">View All Notifications</Link></li>
                  </ul>
                </li>
                {!isAuthenticated ? (
                  <li className="nav-item">
                    <Button variant="primary" onClick={handleRegisterModalShow}>Register</Button>
                    <Button variant="secondary" onClick={handleLoginModalShow}>Login</Button>
                  </li>
                ) : (
                  <li className="nav-item">
                    <Link className="nav-link" to="/dashboard">Dashboard</Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </nav>

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
            <Route path="/dashboard" element={<ProtectedRoute element={<Dashboard />} />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;

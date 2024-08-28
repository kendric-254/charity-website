import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import donateImg from '../assets/images/donate.jpg';

export default function DonationFormPage() {
    const [showMpesaModal, setShowMpesaModal] = useState(false);
    const [amount, setAmount] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const navigate = useNavigate();

    // Handle amount input change
    const handleAmountChange = (e) => setAmount(e.target.value);

    // Handle mobile number input change
    const handleMobileNumberChange = (e) => setMobileNumber(e.target.value);

    // Handle donation method selection
    const handleDonate = (method) => {
        if (method === 'mpesa') {
            setShowMpesaModal(true);
        } else {
            // Handle other payment methods
            alert(`The ${method} payment method is not yet implemented.`);
        }
    };

    // Submit donation via Mpesa
    const handleMpesaSubmit = async () => {
        if (amount && mobileNumber) {
            try {
                // Send donation details to backend
                await axios.post('/api/donate', { mobileNumber, amount });
                // Redirect to confirmation page with amount and mobile number
                navigate(`/confirmation?amount=${amount}&mobile=${mobileNumber}`);
            } catch (error) {
                alert('Failed to process the donation. Please try again.');
            }
        } else {
            alert('Please enter both amount and mobile number.');
        }
    };

    return (
        <div className="container mt-5">
            <h1 className="text-center text-dark mb-4">Make a Donation</h1>
            <p className="lead text-center text-dark-blue">
                Your support helps us provide essential services and resources to those in need.
            </p>

            <div className="card text-center p-4 mb-4">
                <h3>Donate via Mpesa, Credit Card, or Mobile Wallet</h3>
                <p className="mb-3">Secure payment options available to support our cause.</p>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Donation Amount</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Enter amount (KSh)"
                            value={amount}
                            onChange={handleAmountChange}
                            min="1"
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Select Payment Method</Form.Label>
                        <Form.Control as="select" onChange={(e) => handleDonate(e.target.value)} required>
                            <option value="">Choose...</option>
                            <option value="mpesa">Mpesa</option>
                            <option value="creditCard">Credit Card</option>
                            <option value="mobileWallet">Mobile Wallet</option>
                        </Form.Control>
                    </Form.Group>
                </Form>
            </div>

            <div className="row mt-5">
                <div className="col-md-6">
                    <h4>Why Donate?</h4>
                    <p>
                        Every contribution makes a tangible difference. Help us reach more people in need of rehabilitation and support.
                    </p>
                </div>
                <div className="col-md-6 mb-4">
                    <div className="card">
                        <img
                            src={donateImg}
                            className="card-img-top"
                            alt="Donate"
                        />
                        <div className="card-body">
                            <h5 className="card-title">Make a Difference</h5>
                            <p className="card-text">Your donations make a significant impact. Learn how you can contribute.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mpesa Modal */}
            <Modal show={showMpesaModal} onHide={() => setShowMpesaModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Mpesa Donation</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Mobile Number</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter your mobile number"
                                value={mobileNumber}
                                onChange={handleMobileNumberChange}
                                pattern="[0-9]{10}" // Example pattern for Kenyan mobile numbers
                                required
                            />
                        </Form.Group>
                        <Button variant="primary" onClick={handleMpesaSubmit}>
                            Confirm Donation
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    );
}

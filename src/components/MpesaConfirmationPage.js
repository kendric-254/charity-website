import React from 'react';
import { useLocation } from 'react-router-dom';
import { Modal } from 'react-bootstrap';

const MpesaConfirmationPage = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const amount = queryParams.get('amount');
    const mobile = queryParams.get('mobile');

    return (
        <div className="container mt-5">
            <h1 className="text-center text-dark mb-4">Mpesa Donation Confirmation</h1>
            <p className="lead text-center text-dark-blue">
                You will receive a confirmation SMS shortly.
            </p>
            <div className="text-center">
                <p>Amount: KSh {amount}</p>
                <p>Mobile Number: {mobile}</p>
            </div>
        </div>
    );
};

export default MpesaConfirmationPage;

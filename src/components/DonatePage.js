import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function DonatePage() {
    return (
        <div className="container mt-5">
            <h1 className="text-center text-dark mb-4">Make a Donation</h1>
            <p className="lead text-center text-dark-blue">
                Your support helps us provide essential services and resources to those in need.
            </p>

            <div className="card text-center p-4 mb-4">
                <h3>Donate via Mpesa, Credit Card, or Mobile Wallet</h3>
                <p className="mb-3">Secure payment options available to support our cause.</p>
                {/* Payment integration will be added here later */}
                <button className="btn btn-success btn-lg">Donate Now</button>
            </div>

            <div className="row mt-5">
                <div className="col-md-6">
                    <h4>Why Donate?</h4>
                    <p>
                        Every contribution makes a tangible difference. Help us reach more people in need of rehabilitation and support.
                    </p>
                </div>
                <div className="col-md-6">
                    <img
                        src="https://via.placeholder.com/500x300"
                        alt="Donate"
                        className="img-fluid rounded"
                    />
                </div>
            </div>
        </div>
    );
}

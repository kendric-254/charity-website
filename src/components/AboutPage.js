import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function AboutPage() {
    return (
        <div className="container mt-5">
            <h1 className="text-center text-dark mb-4">About Us</h1>
            <p className="lead text-center text-dark-blue">
                Our charity is dedicated to supporting those affected by drug addiction through rehabilitation programs. We aim to provide holistic care and ensure lasting recovery.
            </p>
            <div className="row mt-5">
                <div className="col-md-6">
                    <h3>Our Mission</h3>
                    <p>
                        To transform lives by providing accessible rehabilitation services and supporting reintegration into society. Every donation makes a difference in someone’s recovery journey.
                    </p>
                </div>
                <div className="col-md-6">
                    <img
                        src="https://via.placeholder.com/500x300"
                        alt="Our Work"
                        className="img-fluid rounded"
                    />
                </div>
            </div>
        </div>
    );
}

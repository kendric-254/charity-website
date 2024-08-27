import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ProgramsPage() {
    return (
        <div className="container mt-5">
            <h1 className="text-center text-dark mb-4">Our Programs</h1>
            <div className="row">
                <div className="col-md-4">
                    <div className="card mb-4">
                        <img
                            src="https://via.placeholder.com/300x200"
                            className="card-img-top"
                            alt="Rehabilitation Program"
                        />
                        <div className="card-body">
                            <h5 className="card-title">Rehabilitation Support</h5>
                            <p className="card-text">Offering personalized rehabilitation programs to help individuals recover and reintegrate into society.</p>
                        </div>
                    </div>
                </div>
                {/* Add more program cards here */}
            </div>
        </div>
    );
}

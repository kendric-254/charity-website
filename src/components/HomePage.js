import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function HomePage() {
    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Welcome to the Charity Website</h1>
            <p className="lead text-center">
                Our mission is to raise funds to support drug rehabilitation programs and help individuals on their journey to recovery.
            </p>

            {/* Section for Images and Videos */}
            <div className="row mt-5">
                {/* Image 1 */}
                <div className="col-md-4 mb-4">
                    <div className="card">
                        <img
                            src="https://via.placeholder.com/300x200"
                            className="card-img-top"
                            alt="Our Work in Progress"
                        />
                        <div className="card-body">
                            <p className="card-text">Our team actively working on rehabilitation programs.</p>
                        </div>
                    </div>
                </div>

                {/* Video 1 */}
                <div className="col-md-4 mb-4">
                    <div className="card">
                        <div className="embed-responsive embed-responsive-16by9">
                            <iframe
                                className="embed-responsive-item"
                                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                                title="Our Work in Progress"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <div className="card-body">
                            <p className="card-text">A video showing our recent charity event.</p>
                        </div>
                    </div>
                </div>

                {/* Image 2 */}
                <div className="col-md-4 mb-4">
                    <div className="card">
                        <img
                            src="https://via.placeholder.com/300x200"
                            className="card-img-top"
                            alt="Our Work in Progress"
                        />
                        <div className="card-body">
                            <p className="card-text">Community outreach programs in action.</p>
                        </div>
                    </div>
                </div>
            </div>

            <p className="text-center mt-5">
                Your contributions help us continue our work. Join us in making a difference.
            </p>
        </div>
    );
}

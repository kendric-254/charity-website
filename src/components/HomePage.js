import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import depressedImg from '../assets/images/depressed.jpg';
import freedomImg from '../assets/images/freedom.jpg';
import logo from '../assets/images/logo.jpg';
import psychologyImg from '../assets/images/psychology.jpg';
import stopdrugsImg from '../assets/images/stopdrugs.jpg';
import './HomePage.css';  

export default function HomePage() {
    return (
        <div className="container mt-5">
            {/* Logo Section */}
            <div className="logo-container text-start mb-4">
                <img
                    src={logo}
                    className="logo img-fluid"
                    alt="Charity Logo"
                />
            </div>

            {/* Animated Text Slider */}
            <div className="text-slider-container">
                <div className="text-slider">
                    <h1>Welcome to the Charity Website</h1>
                    <p>Our mission is to raise funds <br/> to support drug rehabilitation programs<br/> and help individuals on their journey to recovery.</p>
                </div>
            </div>

            {/* Section for Images and Videos */}
            <div className="row mt-5">
                {/* Image 1: Depressed Individual */}
                <div className="col-md-4 mb-4">
                    <div className="card">
                        <img
                            src={depressedImg}
                            className="card-img-top"
                            alt="Depressed Individual"
                        />
                        <div className="card-body">
                            <h5 className="card-title">Understanding the Struggle</h5>
                            <p className="card-text">Highlighting the challenges faced by individuals struggling with addiction.</p>
                        </div>
                    </div>
                </div>

                {/* Video 1: Our Work in Progress */}
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
                            <h5 className="card-title">Our Work in Progress</h5>
                            <p className="card-text">A video showcasing our recent charity event and the impact we've made.</p>
                        </div>
                    </div>
                </div>

                {/* Image 2: Freedom and Recovery */}
                <div className="col-md-4 mb-4">
                    <div className="card">
                        <img
                            src={freedomImg}
                            className="card-img-top"
                            alt="Freedom and Recovery"
                        />
                        <div className="card-body">
                            <h5 className="card-title">Freedom and Recovery</h5>
                            <p className="card-text">Celebrating the freedom and recovery of those we've helped.</p>
                        </div>
                    </div>
                </div>

                {/* Image 4: Psychology */}
                <div className="col-md-4 mb-4">
                    <div className="card">
                        <img
                            src={psychologyImg}
                            className="card-img-top"
                            alt="Psychology"
                        />
                        <div className="card-body">
                            <h5 className="card-title">Psychological Support</h5>
                            <p className="card-text">The importance of psychological support in addiction recovery.</p>
                        </div>
                    </div>
                </div>

                {/* Image 5: Stop Drugs */}
                <div className="col-md-4 mb-4">
                    <div className="card">
                        <img
                            src={stopdrugsImg}
                            className="card-img-top"
                            alt="Stop Drugs"
                        />
                        <div className="card-body">
                            <h5 className="card-title">Stop Drugs</h5>
                            <p className="card-text">Our commitment to combating drug addiction and supporting recovery.</p>
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

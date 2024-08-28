import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AboutPage.css'; 
import visionImg from '../assets/images/vision.jpg'; // Import vision image
import missionImg from '../assets/images/mission.jpg'; // Import mission image
import handImg from '../assets/images/hand.jpg'; // Import hand image

export default function AboutPage() {
    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">About Us</h1>
            <p className="lead text-center text-dark-blue">
                Our charity is dedicated to supporting those affected by drug addiction through rehabilitation programs. We aim to provide holistic care and ensure lasting recovery.
            </p>

            {/* Story Section in Card */}
            <div className="card mb-4">
                <div className="card-header">
                    Our Story
                </div>
                <div className="card-body">
                    <p>
                        At "Hope's Horizon," we believe in a new beginning for every individual struggling with addiction. Just as the horizon represents the meeting point between the earth and the sky, we stand at the crossroads of hope and healing. Our mission is to guide individuals out of the darkness of addiction and into a brighter, healthier future.
                    </p>
                    <p>
                        We are dedicated to creating a community where every person can envision a better tomorrow. Through our programs, we strive to show that recovery is not just possible but a journey worth embarking upon.
                    </p>
                </div>
            </div>

            {/* Quote Section */}
            <div className="text-center mt-4">
                <blockquote className="quote">
                    Beyond the shadows lies a dawn of hope, where every step forward is a step toward the light.
                </blockquote>
            </div>

            <div className="row mt-5">
                <div className="col-md-6">
                    <h3>Our Mission</h3>
                    <p>
                        To transform lives by providing accessible rehabilitation services and supporting reintegration into society. Every donation makes a difference in someone’s recovery journey.
                    </p>
                </div>
                <div className="col-md-6">
                    <img
                        src={missionImg} // Use the imported mission image
                        alt="Our Work"
                        className="img-fluid rounded"
                    />
                </div>
            </div>

            <div className="row mt-5">
                <div className="col-md-6 order-md-2">
                    <h3>Our Vision</h3>
                    <p>
                        Our vision is to build a community free from the grip of addiction, where individuals are empowered to live fulfilling and healthy lives. We believe in the potential of every person to recover and lead a meaningful life.
                    </p>
                </div>
                <div className="col-md-6 order-md-1">
                    <img
                        src={visionImg} // Use the imported vision image
                        alt="Our Vision"
                        className="img-fluid rounded"
                    />
                </div>
            </div>

            <div className="row mt-5">
                <div className="col-md-12 text-center">
                    <h3>Our Impact</h3>
                    <p>
                        Since our founding, we’ve helped hundreds of individuals find a path to recovery. Through our programs, counseling sessions, and community outreach, we’ve made a significant difference in the lives of those we serve.
                    </p>
                </div>
            </div>

            <div className="row mt-5">
                <div className="col-md-6">
                    <h3>Get Involved</h3>
                    <p>
                        We welcome volunteers, donors, and partners to join us in our mission. Whether you’re looking to contribute time, resources, or expertise, there are many ways to make an impact and be a part of our community.
                    </p>
                </div>
                <div className="col-md-6">
                    <img
                        src={handImg} // Use the imported hand image
                        alt="Get Involved"
                        className="img-fluid rounded"
                    />
                </div>
            </div>
        </div>
    );
}

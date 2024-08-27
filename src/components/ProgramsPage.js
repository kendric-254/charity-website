import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import addict from '../assets/images/addict.jpg';
import drugsobsession from '../assets/images/drugsobsession.jpg'
import helpme from '../assets/images/helpme.jpg'

export default function ProgramsPage() {    
    return (
        <div className="container mt-5">
            <h1 className="text-center text-dark mb-4">Our Programs</h1>
            <div className="row">
                <div className="col-md-4">
                    <div className="card mb-4">
                        <img
                            src={addict} // Use the imported image here
                            className="card-img-top" // Bootstrap class for styling the image
                            alt="Rehabilitation Program"
                        />
                        <div className="card-body">
                            <h5 className="card-title">Rehabilitation Support</h5>
                            <p className="card-text">
                                Offering personalized rehabilitation programs to help individuals recover and reintegrate into society.
                            </p>
                        </div>
                    </div>
                </div>
                {/* Add more program cards here */}

                <div className="col-md-4">
                    <div className="card mb-4">
                        <img
                            src={helpme}
                            className="card-img-top"
                            alt="Rehabilitation Program"
                        />
                        <div className="card-body">
                            <h5 className="card-title">Community Outreach</h5>
                            <p className="card-text">
                                Providing support to individuals who are recovering from drug and alcohol addiction.
                            </p>
                        </div>
                    </div>
                </div>
                        

                <div className="col-md-4">
                    <div className="card mb-4">
                        <img
                            src={drugsobsession}
                            className="card-img-top"
                            alt="Rehabilitation Program"
                        />
                        <div className="card-body">
                            <h5 className="card-title">Drug and Alcohol Recovery</h5>
                            <p className="card-text">
                                Providing support to individuals who are recovering from drug and alcohol addiction.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ContactPage() {
    return (
        <div className="container mt-5">
            <h1 className="text-center text-dark mb-4">Contact Us</h1>
            <p className="lead text-center text-dark-blue">
                We would love to hear from you! Whether you want to donate, volunteer, or learn more about our programs, feel free to reach out.
            </p>
            <form className="mt-4">
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" placeholder="Your Name" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" placeholder="Your Email" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Message</label>
                    <textarea className="form-control" rows="5" placeholder="Your Message"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
        </div>
    );
}

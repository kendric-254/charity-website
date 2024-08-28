import React from 'react';
import { useLocation } from 'react-router-dom';

export default function ConfirmationPage() {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const amount = params.get('amount');
    const mobile = params.get('mobile');

    return (
        <div className="container mt-5">
            <h1 className="text-center text-dark mb-4">Donation Confirmation</h1>
            <p className="lead text-center text-dark-blue">
                Thank you for your generous donation of KSh {amount}. Your support is crucial in our efforts to provide help and resources.
            </p>
            <p className="text-center">
                The total amount donated so far is being updated in our records. Donations are sent to the designated account or mobile number for processing.
            </p>
            <p className="text-center">
                For further inquiries, please contact us at [your contact information].
            </p>
        </div>
    );
}

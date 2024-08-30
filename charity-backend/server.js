require('dotenv').config();
const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

// Generate access token
const generateToken = async () => {
    const url = `https://${process.env.MPESA_ENV}.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials`;
    const auth = Buffer.from(`${process.env.CONSUMER_KEY}:${process.env.CONSUMER_SECRET}`).toString('base64');

    try {
        const { data } = await axios.get(url, {
            headers: {
                Authorization: `Basic ${auth}`,
            },
        });
        return data.access_token;
    } catch (error) {
        console.error('Error generating token', error);
    }
};

// Lipa na M-Pesa Online
const lipaNaMpesaOnline = async (req, res) => {
    const token = await generateToken();
    const timestamp = new Date().toISOString().replace(/[^0-9]/g, '').slice(0, 14);
    const password = Buffer.from(`${process.env.MPESA_SHORTCODE}${process.env.MPESA_PASSKEY}${timestamp}`).toString('base64');

    const payload = {
        BusinessShortCode: process.env.MPESA_SHORTCODE,
        Password: password,
        Timestamp: timestamp,
        TransactionType: 'CustomerPayBillOnline',
        Amount: req.body.amount, // Amount to charge
        PartyA: req.body.phone, // Customer's phone number in format 2547XXXXXXXX
        PartyB: process.env.MPESA_SHORTCODE,
        PhoneNumber: req.body.phone, // Same as PartyA
        CallBackURL: process.env.CALLBACK_URL,
        AccountReference: 'Charity Donation',
        TransactionDesc: 'Donation Payment'
    };

    try {
        const { data } = await axios.post(`https://${process.env.MPESA_ENV}.safaricom.co.ke/mpesa/stkpush/v1/processrequest`, payload, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        res.status(200).json(data);
    } catch (error) {
        console.error('Error initiating payment', error);
        res.status(500).json({ error: 'Payment initiation failed' });
    }
};

// Endpoint to initiate payment
app.post('/api/donate', lipaNaMpesaOnline);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

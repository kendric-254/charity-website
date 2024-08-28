require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const twilio = require('twilio');
const { Sequelize, DataTypes } = require('sequelize');

const app = express();

// Set up body parser
app.use(bodyParser.json());

// Twilio credentials
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);

// Sequelize setup for MySQL
const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    port: process.env.DB_PORT,
    logging: false,
});

// Test connection to database
sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

// Donation model
const Donation = sequelize.define('Donation', {
    amount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    mobileNumber: {
        type: DataTypes.STRING,
        allowNull: true,
    },
});

// Sync database
sequelize.sync();

// Endpoint to record donations
app.post('/api/donate', async (req, res) => {
    const { mobileNumber, amount } = req.body;

    try {
        console.log(`Received donation of KSh ${amount} from ${mobileNumber}`);
        // Record donation
        await Donation.create({ amount, mobileNumber });

        // Calculate total donations
        const totalDonations = await Donation.sum('amount');

        // Send SMS confirmation
        await client.messages.create({
            body: `Thank you for your donation of KSh ${amount}. Total donations: KSh ${totalDonations}.`,
            from: process.env.TWILIO_PHONE_NUMBER,
            to: mobileNumber,
        });

        res.status(200).json({ success: true, message: 'Donation recorded and SMS sent!' });
    } catch (error) {
        console.error('Error processing donation:', error);
        res.status(500).json({ success: false, message: 'Failed to record donation', error: error.message });
    }
});

// Test Twilio setup
app.get('/test-sms', async (req, res) => {
    try {
        await client.messages.create({
            body: 'This is a test message',
            from: process.env.TWILIO_PHONE_NUMBER,
            to: '+254757210923', // Replace with a valid phone number
        });
        res.status(200).json({ success: true, message: 'Test SMS sent successfully!' });
    } catch (error) {
        console.error('Error sending test SMS:', error);
        res.status(500).json({ success: false, message: 'Failed to send test SMS', error: error.message });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

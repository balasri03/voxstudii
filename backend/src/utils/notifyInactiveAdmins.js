import mongoose from 'mongoose';
import { adminLogin } from '../models/admin_login.models.js';
import nodemailer from 'nodemailer';
import 'dotenv/config';
import cron from 'node-cron';

const MONGODB_URI = process.env.MONGODB_URI + '/feedback';

async function sendEmail(to, subject, text) {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to,
        subject,
        text
    });
}

async function notifyInactiveAdmins() {
    await mongoose.connect(MONGODB_URI);
    const threshold = new Date(Date.now() - 5 * 60 * 1000); // 5 minutes ago
    const inactiveAdmins = await adminLogin.find({
        $or: [
            { lastLogin: { $lt: threshold } },
            { lastLogin: { $exists: false } }
        ]
    });

    for (const admin of inactiveAdmins) {
        if (admin.email) {
            await sendEmail(
                admin.email,
                'Reminder: Please check your admin dashboard',
                `Hi ${admin.username},\n\nYou have not logged into the admin dashboard for a while. Please check for new feedbacks.\n\nThanks!`
            );
            console.log(`Email sent to ${admin.email}`);
        }
    }
    await mongoose.disconnect();
}

// Run every minute
cron.schedule('* * * * *', () => {
    notifyInactiveAdmins().catch(console.error);
    console.log('Checked for inactive admins at', new Date());
});
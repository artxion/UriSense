const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

module.exports = transporter;

const transporter = require('./mail'); // or however you're importing it

await transporter.sendMail({
  from: process.env.EMAIL_USER,
  to: user.email,
  subject: 'Email Verification',
  html: `<p>Click the link to verify your email: <a href="${verificationLink}">Verify</a></p>`
});

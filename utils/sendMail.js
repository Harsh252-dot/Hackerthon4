const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: process.env.SMTP_SECURE === "true", // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

const sendMail = async ({ to, subject, html }) => {
  try {
    const info = await transporter.sendMail({
      from: `"EdTech Platform" <${process.env.SMTP_USER}>`,
      to,
      subject,
      html,
    });
    return info;
  } catch (err) {
    throw new Error("Email sending failed: " + err.message);
  }
};

module.exports = sendMail;

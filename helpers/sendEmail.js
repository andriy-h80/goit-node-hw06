const sgMail = require("@sendgrid/mail");
require("dotenv").config();

const {SENDGRID_API_KEY} = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

const sendEmail = async(data) => {
    const email = {...data, from: "megawatt_ah@meta.ua"};  // змінити email на ту, яка вказана при реєстрації в SendGrid
    await sgMail.send(email);
    return true;
};

module.exports = sendEmail;

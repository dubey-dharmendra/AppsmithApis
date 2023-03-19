const nodemailer = require('nodemailer');

exports.sendEmail = async (options) => {
 console.log(options);
 const transporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICES,
  host: process.env.EMAIL_HOST,
  secure: false,
  auth: {
   user: process.env.EMAIL_USERNAME,
   pass: process.env.EMAIL_APP_PASSWORD,
  },
 });

 const mailOptions = {
  from: process.env.EMAIL_USERNAME,
  to: options.email,
  subject: options.subject,
  text: options.message,
 };

 transporter.sendMail(mailOptions, function (err, info) {
  if (err) {
   console.log(err);
  } else {
   console.log(info);
  }
 });
};


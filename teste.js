// Import the Nodemailer module
const nodemailer = require('nodemailer');
// Create a transporter object using SMTP transport
const transporter = nodemailer.createTransport({
host: 'smtp.office365.com',
port: 587,
secure: false, // true for 465, false for other ports
auth: {
user: 'thayanodavalo@gmail.com', // your Outlook email
pass: '-ELL3%*k?M2qNr^', // your Outlook password
},
});
// Send email function
transporter.sendMail({
from: '"Sender Name" thayanodavalo@gmail.com',
to: 'ttdavalo@gmail.com',
subject: 'Hello from Node.js',
text: 'Hello world!',
html: '<b>Hello world!</b>',
}, (error, info) => {
if (error) {
return console.log(error);
}
console.log('Message sent: %s', info.messageId);
});

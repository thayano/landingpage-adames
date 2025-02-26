'use server';

import nodemailer from 'nodemailer';
import process from 'process';

const SMTP_SERVER_USERNAME = process.env.SMTP_SERVER_USERNAME;
const SITE_MAIL_RECIEVER = process.env.SITE_MAIL_RECIEVER;
const transporter = nodemailer.createTransport({
	service: "gmail",
	auth: {
		type: "OAuth2",
		user: SMTP_SERVER_USERNAME,
		clientId: process.env.CLIENT_ID,
		clientSecret: process.env.CLIENT_SECRET,
		refreshToken: process.env.REFRESH_TOKEN,
		accessToken: process.env.ACCESS_TOKEN,
	}
});


// const mailOptions = {
//     from: 'ttdavalo@gmail.com',
//     to: 'ttddavalo@gmail.com',
//     subject: 'Nodemailer Project',
//     text: 'Hi from your nodemailer project'
//   };


//   transporter.sendMail(mailOptions, function(err, data) {
//     if (err) {
//       console.log("Error " + err);
//     } else {
//       console.log("Email sent successfully");
//     }
//   });

export async function sendMail({
	email,
	sendTo,
	subject,
	text,
	html,
}: {
	email: string;
	sendTo?: string;
	subject: string;
	text: string;
	html?: string;
}) {
	try {
		// const isVerified = await transporter.verify();
	} catch (error) {
		console.error('Something Went Wrong', SMTP_SERVER_USERNAME, error);
		return;
	}
	const info = await transporter.sendMail({
		from: email,
		to: sendTo || SITE_MAIL_RECIEVER,
		subject: subject,
		text: text,
		html: html ? html : '',
	});
	console.log('Message Sent', info.messageId);
	console.log('Mail sent to', SITE_MAIL_RECIEVER);
	return info;
}
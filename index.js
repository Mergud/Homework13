/*
var fs = require ("fs");

fs.appendFile('h.txt', '\nSecond sentence', function (err){
	if(err) throw err;
	console.log('Updated!');
});
*/
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: 'PanAndre186@gmail.com',
		pass: '**********' //must be real password
	}
});

var mailOptions = {
	from: 'PanAndre186@gmail.com',
	to: 'Zmilan66@gmail.com',
	subject: 'Sending Email using Node.js',
	text: 'That was strange'
};

transporter.sendMail(mailOptions, function(error, info){
	if (error) {
    console.log(error);
  	} else {
    console.log('Email sent succesfully: ' + info.response);
  }
});

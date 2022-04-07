const api_key = process.env.MAILGUN_KEY;
const domain = process.env.MAILGUN_DOMAIN || "mg.pankaj.pro";
const formData = require('form-data');
const Mailgun = require('mailgun.js');

const mailgun = new Mailgun(formData);

const mg = mailgun.client({
  username: 'api',
  key: api_key,
  url: 'https://api.eu.mailgun.net'
});

exports.handler = function (event, context, callback) {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 401,
      body: JSON.stringify({ status: "Error", message: "Not allowed" }),
    };
  }

  const reqBody = JSON.parse(event.body);

  const data = {
    from: reqBody.bcc,
    to: process.env.TO_EMAIL || "hello@pankaj.pro",
    subject: "Contact Form Submission",
    template: "contact-form-template",
    "h:X-Mailgun-Variables": JSON.stringify(reqBody),
  };
  mg.messages
    .create(domain, data)
    .then(msg => callback(null, {
      statusCode: 200,
      body: JSON.stringify(msg || { status: "Success" }),
    }))
    .catch(err => callback(null, {
      statusCode: 500,
      body: JSON.stringify(err || { status: "Error" }),
    }));
};

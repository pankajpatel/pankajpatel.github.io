var api_key = process.env.MAILGUN_KEY;
var domain = process.env.MAILGUN_DOMAIN || "mg.pankaj.pro";
var mailgun = require("mailgun-js")({
  apiKey: api_key,
  domain: domain,
  host: "api.eu.mailgun.net",
});

exports.handler = function (event, context, callback) {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 401,
      body: JSON.stringify({ status: "Error", message: "Not allowed" }),
    };
  }
  /*
  subject: Form Check
  bcc: xxxxxx@xxxx.xxx
  message: some random text
  */
  const reqBody = JSON.parse(event.body);

  var data = {
    from: reqBody.bcc,
    to: process.env.TO_EMAIL || "hello@pankaj.pro",
    subject: "Contact Form Submission",
    template: "contact-form-template",
    "h:X-Mailgun-Variables": JSON.stringify(reqBody),
  };

  mailgun.messages().send(data, function (error, body) {
    if (error) {
      callback(null, {
        statusCode: 500,
        body: JSON.stringify(error || { status: "Error" }),
      });
      return;
    }
    callback(null, {
      statusCode: 200,
      body: JSON.stringify(body || { status: "Success" }),
    });
  });
};

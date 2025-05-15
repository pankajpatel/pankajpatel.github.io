import { NextResponse } from 'next/server';
import formData from 'form-data';
import Mailgun from 'mailgun.js';

const mailgun = new Mailgun(formData);

const api_key = process.env.MAILGUN_KEY || '';
const domain = process.env.MAILGUN_DOMAIN || 'mg.pankaj.pro';

const mg = mailgun.client({
  username: 'api',
  key: api_key,
  url: 'https://api.eu.mailgun.net'
});

interface EmailRequestBody {
  bcc: string;
  [key: string]: any;
}

export async function POST(request: Request) {
  try {
    const reqBody: EmailRequestBody = await request.json();

    const data = {
      from: reqBody.bcc,
      to: process.env.TO_EMAIL || 'hello@pankaj.pro',
      subject: 'Contact Form Submission',
      template: 'contact-form-template',
      'h:X-Mailgun-Variables': JSON.stringify(reqBody),
    };

    const result = await mg.messages.create(domain, data);

    return NextResponse.json(result || { status: 'Success' }, { status: 200 });
  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json(
      { status: 'Error', message: 'Failed to send email' },
      { status: 500 }
    );
  }
}

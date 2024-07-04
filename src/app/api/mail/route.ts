import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const mailer = nodemailer.createTransport({
  host: process.env.HOST,
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS,
  },
});

export async function POST(req: NextRequest) {
  const payload = await req.json();
  let res = NextResponse.json({ status: 201, data: 'success' });

  mailer
    .sendMail({
      to: process.env.EMAIL,
      from: process.env.EMAIL,
      subject: `Enquiry from: ${payload.name}`,
      replyTo: payload.email,
      text: payload.message,
      html: `<p>${payload.message}</p><p>Customer name: ${payload.name}</p><p>Customer email: ${payload.email}</p>`,
      sender: process.env.EMAIL,
    })
    .then(() => {
      res = NextResponse.json({ status: 201, data: 'success' });
    })
    .catch(() => {
      res = NextResponse.json({ status: 400, data: 'success' });
    });

  return res;
}

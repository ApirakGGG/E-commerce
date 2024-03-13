import type { NextApiRequest, NextApiResponse } from 'next';
const sgMail = require("@sendgrid/mail");

const API_KEY = "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"
sgMail.setApiKey(API_KEY);

type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    if (req.method === 'POST') {
      const {
        name,
        email,
        message,
      }: { name: string; email: string; message: string } = req.body;

      const msg = `Name: ${name}\r\n Email: ${email}\r\n Message: ${message}`;

      const data = {
        to: "tachibanakanade225@gmail.com" ,
        from: "naratah012345@gmail.com",
        subject: `${name.toUpperCase()} sent you a message from Contact Form`,
        text: `Email => ${email}`,
        html: msg.replace(/\r\n/g, "<br>"),
      };

      try {
        await sgMail.send(data);
        res.status(200).json({ message: 'Your message was sent successfully.' });
      } catch (err) {
        res
          .status(500)
          .json({ message: `There was an error sending your message. ${err}` });
      }
    }
  } catch (error) {
    console.error('Error in API route:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

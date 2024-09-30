import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ msg: 'Only POST requests are allowed' });
  }

  try {
    const { name, email, subject, message } = JSON.parse(req.body);

    const { data, error } = await resend.emails.send({
      from: `my portfolio under name :${name} <onboarding@resend.dev>`,
      to: ['omar.hisham0597@outloock.com'],
      subject: `New Contact Form My Portfolio: ${subject}`,
      html: `
        <h2>New Contact My Portfolio</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    if (error) {
      console.error(error);
      return res.status(400).json({ msg: 'Failed to send email', error });
    }

    res.status(200).json({ msg: 'Email sent successfully', data });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Failed to send email', error });
  }
};
import nodemailer from 'nodemailer';

const maxemail = process.env.EMAIL;
const password = process.env.EMAIL_PASS;

export default async function ContactAPI(req, res) {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: maxemail,
      pass: password,
    },
  });

  try {
    const mail = await transporter.sendMail({
      from: maxemail,
      to: maxemail,
      replyTo: email,
      subject: `Portfolio Contact Submission from ${name}`,
      html: `
  <p>${name}</p>
  <p>${email}</p>
  <p>${message}</p>
  `,
    });

    console.log('Message sent:', mail.messageId);
    return res.status(200).json({ message: 'success' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ messsage: 'could not send the email' });
  }
}

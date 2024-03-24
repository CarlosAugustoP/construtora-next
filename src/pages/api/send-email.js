import { Resend } from 'resend';

const RESEND_API_KEY = process.env.RESEND_API_KEY;

const resend = new Resend(RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, telephone, message } = req.body;
    
    try {
      await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'gabrielpires2991@gmail.com',
        subject: 'Nova mensagem recebida!',
        text: 'Hello',
      });
      res.status(200).json({ status: 'Success' });
      console.log(`${RESEND_API_KEY}`);
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ status: 'Error', message: error.message });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

import { Resend } from 'resend';

const RESEND_API_KEY = process.env.RESEND_API_KEY;

const resend = new Resend(RESEND_API_KEY);

export default async function handler(req, res) {
  const { name, email, telephone, message } = req.body;

  const { data, error } = await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: 'gabrielpires2991@gmail.com',
    subject: 'Nova mensagem recebida!',
    text: `Nome: ${name}\nEmail: ${email}\nTelefone: ${telephone}\nMensagem: ${message}`,
  });
  if (error) {
    console.error('Failed to send email:', error);
    return res.status(500).json({ status: 'Error' });
  }
  res.status(200).json({ status: 'Success', message: data.message });
}

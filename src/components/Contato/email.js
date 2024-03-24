import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

exports.sendEmail = async (name, email, telephone, message) => {
  try {
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'gabrielpires2991@gmail.com',
      subject: 'Nova mensagem recebida!',
      text: `Nome: ${name}\nEmail: ${email}\nTelefone: ${telephone}\nMensagem: ${message}`,
    });
  } catch (error) {
    console.error('Error sending email:', error);
  }
  
};

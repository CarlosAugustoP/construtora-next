import React, { useState } from 'react';
import { Container, FormContainer, InputContainer, Title, InputField, Button } from './styles';
import { ContentSection } from '../QuemSomos';
import toast from 'react-hot-toast';

export default function Contato() {

  const [state, setState] = useState({
    nome: '',
    email: '',
    telefone: '',
    mensagem: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { nome, email, telefone, mensagem } = state;

    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: nome, email, telephone: telefone, message: mensagem }),
    });

    if (response.ok) {
      console.log("Email enviado com sucesso!");
      setState({
        nome: '',
        email: '',
        telefone: '',
        mensagem: '',
      });
      toast.success('Email enviado com sucesso!');
    } else {
      console.error('Falha ao enviar o email. Tente novamente mais tarde.');
      toast.error('Falha ao enviar o email. Tente novamente mais tarde.');
    }
  }

  const inputFields = [
    { label: 'Nome:', type: 'text', id: 'nome', name: 'nome', required: true },
    { label: 'Email:', type: 'email', id: 'email', name: 'email', required: true },
    { label: 'Telefone:', type: 'tel', id: 'telefone', name: 'telefone', required: true },
    { label: 'Mensagem:', type: 'text', id: 'mensagem', name: 'mensagem', required: true },
  ];

  return (
    <Container id="Contato">
      <ContentSection style={{ paddingBottom: "10px" }} imgSrc="img/porenquanto.jpeg" titleText="Fale Conosco!" direction="row-reverse" backgroundColor='rgb(238, 238, 238, 0.8)' color="black">
        <FormContainer onSubmit={handleSubmit}>
          <InputContainer>
            {inputFields.map(({ label, type, id, name, required }) => (
              <div key={id} style={{ display: 'flex', flexDirection: 'column', fontSize: '15px' }}>
                <label htmlFor={id}>{label}</label>
                <InputField type={type} id={id} name={name} required={required} value={state[name]} onChange={handleChange} />
              </div>
            ))}
          </InputContainer>
          <Button type="submit" value="Enviar">
            Enviar
          </Button>
        </FormContainer>
      </ContentSection>
    </Container>
  );

}

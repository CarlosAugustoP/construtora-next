import React, { useState } from 'react';
import { Container, FormContainer, InputContainer, Title, InputField, Button } from './styles';
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
    const name = state.nome;
    const email = state.email;
    const telephone = state.telefone;
    const message = state.mensagem;

    fetch('http://localhost:3001/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        name: name, 
        email: email, 
        telephone: telephone, 
        message: message 
      })
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));
  }

  const inputFields = [
    { label: 'Nome:', type: 'text', id: 'nome', name: 'nome', required: true },
    { label: 'Email:', type: 'email', id: 'email', name: 'email', required: true },
    { label: 'Telefone:', type: 'tel', id: 'telefone', name: 'telefone', required: true },
    { label: 'Mensagem:', type: 'text', id: 'mensagem', name: 'mensagem', required: true },
  ];

  return (
    <Container id = "Contato">
      <h1>Fale Conosco!</h1>
      <FormContainer onSubmit={handleSubmit}>
        <InputContainer>
          {inputFields.map(({ label, type, id, name, required }) => (
            <div key={id} style={{ display: 'flex', flexDirection: 'column', fontSize: '15px' }}>
              <label htmlFor={id}>{label}</label>
              <InputField type={type} id={id} name={name} required={required} onChange={handleChange}/>
            </div>
          ))}
        </InputContainer>
      <Button type="submit" value="Enviar">
        Enviar
      </Button>
      </FormContainer>
    </Container>
  );
}

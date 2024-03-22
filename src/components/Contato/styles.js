import styled from 'styled-components';

export const Title = styled.h1`
  font-weight: 200;
  font-size: 30px;

`
export const Container = styled.div`
  margin-top: 50px;
  background-color: grey;;
  width: 100%;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-bottom: 15px;
  @media (max-width: 768px) {
    height: 400px;
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InputContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr ;
  align-items: center;
  justify-items: end;
  gap: 40px;
  position: relative;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    justify-items: center;
    gap:10px;
  }
 
`;

export const InputField = styled.input`
  width: 250px;
  height: 20px;
  border: none;
  border-radius: 5px;
  padding: 5px;
  font-size: 12px;
  background-color: #f0f0f0;
`;

export const Button = styled.button`
    background-color: black;
    color: white;
    padding: 10px;
    border-radius: 10px;
    margin-top: 20px ;
    border: none;
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
        background-color: #fff;
        color: #575757;
    }
    `;

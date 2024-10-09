import styled from 'styled-components';

// Container principal da página de login
const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f2f5;
`;

// Caixa de login
const LoginBox = styled.div`
  background-color: #fff;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 350px;
  text-align: center;
`;

// Título
const Title = styled.h2`
  margin-bottom: 20px;
  color: #333;
`;

// Subtítulo
const Subtitle = styled.p`
  color: #666;
  margin-bottom: 20px;
`;

// Estilos dos campos de input
const InputGroup = styled.div`
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

// Botão estilizado
const Button = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

// Mensagem de erro
const ErrorMessage = styled.p`
  color: red;
  margin-bottom: 15px;
`;

// Link "Esqueceu sua senha?"
const ForgotPassword = styled.p`
  margin-top: 15px;
  color: #007bff;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;


export { Button, ErrorMessage, ForgotPassword, Input, InputGroup, LoginBox, LoginContainer, Subtitle, Title };

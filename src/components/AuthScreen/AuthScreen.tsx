import React, { useState } from 'react';
import styled from 'styled-components';

import marvelLogo from '../../assets/marvel-logo.png';
import posterMarvel from '../../assets/poster-marvel.jpg';

interface AuthScreenProps {
  onLoginSuccess: () => void;
}

const Container = styled.div`
  background-color: black;
  color: white;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    padding: 1.25rem;  
    box-sizing: border-box;
  }
`;

const LeftSection = styled.div`
  width: 38vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 4.375rem;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 1.875rem;
    padding: 0 0.9375rem;
    box-sizing: border-box;
  }

  @media (max-width: 480px) {
    margin-bottom: 1.25rem;
  }
`;

const LogoImage = styled.img`
  max-width: 18.75rem;
  height: auto;
  margin-bottom: -1.9375rem;

  @media (max-width: 768px) {
    max-width: 15.625rem;
  }

  @media (max-width: 480px) {
    max-width: 11.25rem;
    margin-bottom: 0;
  }
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.9375rem;
  width: 100%;
  max-width: 21.875rem;

  @media (max-width: 768px) {
    max-width: 90%;
    align-items: center;
  }

  @media (max-width: 480px) {
    gap: 0.625rem;
    max-width: 95%;
  }
`;

const Input = styled.input`
  padding: 1.25rem 2.5rem;
  height: 4.375rem;
  width: 25rem;
  border-radius: 5.9375rem;
  border: none;
  background-color: white;
  color: black;
  font-size: 1.375rem;
  max-width: 36.25rem;
  box-sizing: border-box;

  @media (max-width: 1210px) {
    width: 95%;
    font-size: 1.125rem;
    padding: 0.9375rem 1.875rem;
  }

  @media (max-width: 580px) {
    font-size: 1rem;
    padding: 0.75rem 1.5625rem;
    height: auto;
  }
`;

const Button = styled.button`
  background-color: #FF0000;
  color: white;
  padding: 1.25rem 2.5rem;
  height: 4.375rem;
  width: 25rem;
  border-radius: 5.9375rem;
  border: none;
  cursor: pointer;
  font-size: 1.375rem;
  margin-top: 1.25rem;
  box-sizing: border-box;
  
  &:hover {
   box-shadow: 0px 0px 6px #FF0000;
   transform: scale(1.05);
   transition: .2s;
  }

  @media (max-width: 1210px) {
    width: 95%;
    height: 3.75rem;
    font-size: 1.125rem;
    padding: 0.9375rem 1.875rem;
  }

  @media (max-width: 580px) {
    width: 100%;
    height: auto;
    font-size: 1rem;
    padding: 0.75rem 1.5625rem;
    margin-top: 0.9375rem;
  }
`;

const LinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.9375rem;
  width: 100%;
  max-width: 21.875rem;
  padding: 0 1.875rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.625rem;
    max-width: 90%;
    margin-top: 0.625rem;
    align-items: flex-start;
    padding: 0 0.9375rem;
  }

  @media (max-width: 480px) {
    font-size: 0.75rem;
    max-width: 95%;
    padding: 0 0.625rem;
  }
`;

const LinkText = styled.label`
  font-size: 0.875rem;
  margin: 0;

  @media (max-width: 880px) {
    font-size: 0.75rem;
    margin-bottom: -2.1875rem;
  }
`;

const LinkButton = styled.button`
  color: rgb(112, 112, 112);
  text-decoration: none;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 0.975rem;
  margin: 0;

  display: inline-block;
  position: relative;
  padding-bottom: 0.25rem;
  white-space: nowrap;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 0.125rem;
    background-color: #e62429;
    transition: width 0.3s ease-in-out;
  }

  &:hover::after {
    width: 100%;
  }

  @media (max-width: 768px) {
    font-size: 0.8125rem;
    margin: 0;
    align-self: flex-end;
    padding-bottom: 0.1875rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8125rem;
    margin: 0;
    padding-bottom: 0.125rem;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 0.875rem;
  margin-top: 0.625rem;
  text-align: center;

  @media (max-width: 480px) {
    font-size: 0.75rem;
    margin-top: 0.3125rem;
  }
`;

const StyledH2 = styled.h2`
  color: #e62429;
  margin-bottom: -0.100rem;
  text-align: center;
  font-size: 1.875rem;

  @media (max-width: 768px) {
    font-size: 1.625rem;
    margin-bottom: -1.25rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5625rem;
    margin-bottom: 0.625rem;
  }
`;

const StyledP = styled.p`
  color: rgba(132, 132, 141, 1);
  margin-bottom: 0.3125rem;
  text-align: left;
  font-size: 1rem;

  @media (max-width: 768px) {
    font-size: 0.875rem;
    text-align: center;
  }

  @media (max-width: 480px) {
    font-size: 0.8125rem;
    text-align: center;
  }
`;

const StyledSpan = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.3125rem;
  margin-top: 0.625rem;
  font-size: 0.875rem;

  @media (max-width: 768px) {
    margin-left: 0;
    text-align: center;
    margin-top: 0.3125rem;
    font-size: 0.8125rem;
    flex-direction: column;
    gap: 0.125rem;
  }

  @media (max-width: 480px) {
    font-size: 0.75rem;
  }
`;

const StyledLinkButton = styled.button`
  color: #e62429;
  text-decoration: none;
  border: none;
  background: none;
  cursor: pointer;

  &:hover {
  transform: scale(1.05);
  }

  @media (max-width: 768px) {
    margin-left: 0;
    font-size: 0.8125rem;
  }

  @media (max-width: 480px) {
    font-size: 0.75rem;
  }
`;

const RightSection = styled.div`
  width: 65vw;
  height: 100%;
  background-image: linear-gradient(to left, transparent 10%, rgba(0, 0, 0, 0.8) 60%, black 100%), url(${posterMarvel});
  background-size: cover;
  background-position: center;

  @media (max-width: 768px) {
    width: 100%;
    height: 6.25rem;
    background-image: linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.5) 50%, transparent 100%), url(${posterMarvel});
    background-position: center top;
    margin-top: 1.25rem;
    border-radius: 0.625rem;
  }

  @media (max-width: 780px) {
    display: none;
  }
`;

const AuthScreen: React.FC<AuthScreenProps> = ({ onLoginSuccess }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [cadastroError, setCadastroError] = useState('');
  // Simula usuários já registrados para fins de demonstração
  const [registeredUsers, setRegisteredUsers] = useState(['usuario1', 'email@exemplo.com', 'outroUsuario']);

  const handleLogin = () => {
    setLoginError('');
    console.log('Tentando logar com o usuário:', username);
    console.log('Usuários registrados:', registeredUsers);
    // Verifica se o usuário existe na lista de usuários registrados
    if (registeredUsers.includes(username)) {
      onLoginSuccess();
    } else {
      setLoginError('Usuário não encontrado. Por favor, cadastre-se.');
    }
  };

  const handleCadastro = () => {
    setCadastroError('');
    if (!username) {
      setCadastroError('Por favor, digite um nome de usuário.');
      return;
    }
    if (!email) {
      setCadastroError('Por favor, digite um e-mail.');
      return;
    }
    if (password !== confirmPassword) {
      setCadastroError('As senhas não coincidem.');
      return;
    }
    if (registeredUsers.includes(username)) {
      setCadastroError('Este nome de usuário já está cadastrado.');
      return;
    }

    setRegisteredUsers([...registeredUsers, username]);
    alert('Cadastro realizado com sucesso! Faça login.');
    setIsLogin(true);
  };

  const handleCadastroClick = () => {
    setIsLogin(false);
    setLoginError('');
    setCadastroError('');
  };

  const handleLoginClick = () => {
    setIsLogin(true);
    setLoginError('');
    setCadastroError('');
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>, setter: React.Dispatch<React.SetStateAction<string>>) => {
    setter(event.target.value);
  }

  return (
    <Container>
      <LeftSection>
        <LogoImage src={marvelLogo} alt="Logo da Marvel" />
        {isLogin && (
          <FormContainer>
            <StyledH2>Bem vindo(a) de volta!</StyledH2>
            <StyledP>Acesse sua conta: </StyledP>
            <Input type="text" placeholder="Usuário" value={username} onChange={(e) => handleInputChange(e, setUsername)} />
            <Input type="password" placeholder="Senha" value={password} onChange={(e) => handleInputChange(e, setPassword)} />
            {loginError && <ErrorMessage>{loginError}</ErrorMessage>}
            <LinkContainer>
              <LinkText>
                <input type="checkbox" style={{ marginLeft: '0.625rem', marginRight: '0.125rem' }} /> Salvar login
              </LinkText>
              <LinkButton onClick={() => alert('Funcionalidade não implementada!')}>Esqueci a senha</LinkButton>
            </LinkContainer>
            <Button onClick={handleLogin}>Entrar</Button>
            <StyledSpan>
              Ainda não tem o login? <StyledLinkButton onClick={handleCadastroClick}>Cadastre-se</StyledLinkButton>
            </StyledSpan>
          </FormContainer>
        )}
        {!isLogin && (
          <FormContainer>
            <StyledH2>Cadastrar</StyledH2>
            <Input type="text" placeholder="Usuário" value={username} onChange={(e) => handleInputChange(e, setUsername)} />
            <Input type="email" placeholder="Email" value={email} onChange={(e) => handleInputChange(e, setEmail)} />
            <Input type="password" placeholder="Senha" value={password} onChange={(e) => handleInputChange(e, setPassword)} />
            <Input type="password" placeholder="Confirmar Senha" value={confirmPassword} onChange={(e) => handleInputChange(e, setConfirmPassword)} />
            {cadastroError && <ErrorMessage>{cadastroError}</ErrorMessage>}
            <Button onClick={handleCadastro}>Cadastrar</Button>
            <StyledSpan style={{ marginTop: '1.875rem', fontSize: '1.0625rem' }}>
              Já tem uma conta? <StyledLinkButton style={{ fontSize: '1.0625rem' }} onClick={handleLoginClick}>Entrar</StyledLinkButton>
            </StyledSpan>
          </FormContainer>
        )}
      </LeftSection>
      <RightSection />
    </Container>
  );
};

export default AuthScreen;
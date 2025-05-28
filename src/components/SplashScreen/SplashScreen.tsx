import React from 'react';
import styled from 'styled-components';

import marvelLogo from '../../assets/marvel-logo.png';

const Container = styled.div`
  background-color: #000;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

const Logo = styled.img`
  width: 18.75rem;
  height: auto;
  max-width: 80%;

  @media(max-width: 768px) {
    width: 15.625rem;
  }

  @media (max-width: 480px) {
    width: 11.25rem;
  }
`;

const SplashScreen: React.FC = () => {
  return (
    <Container>
      <Logo src={marvelLogo} alt="Logo da Marvel" />
    </Container>
  );
};

export default SplashScreen;
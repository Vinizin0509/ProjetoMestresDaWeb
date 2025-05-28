import React from 'react';
import styled from 'styled-components';
import marvelLogo from '../assets/marvel-logo.png';
import heroesImage from '../assets/poster-marvel.jpg';

const Container = styled.div`
  background-color: black;
  color: white;
  display: flex;
  height: 100vh;
  width: 100vw;
  align-items: center;
  justify-content: space-between;
  padding: 0 5vw;
  position: relative;
  z-index: 1;

  background-image:
    linear-gradient(to left, transparent 0%, rgba(0, 0, 0, 0.8) 60%, black 100%),
    url(${heroesImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center 20%;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    padding: 2.5rem 1.25rem;
    box-sizing: border-box;
    background-image:
      linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.5) 50%, transparent 100%),
      url(${heroesImage});
    background-position: center;
  }

  @media (max-width: 480px) {
    background-image:
      linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.6) 50%, transparent 100%),
      url(${heroesImage});
    background-position: center;
  }
`;

const LogoContainer = styled.div`
  width: 25%;
  max-width: 12.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;

  @media (max-width: 768px) {
    width: 80%;
    max-width: 15.625rem;
    margin-bottom: 2.5rem;
  }

  @media (max-width: 480px) {
    width: 90%;
    max-width: 11.25rem;
    margin-bottom: 1.875rem;
  }
`;

const MarvelLogoImage = styled.img`
  max-width: 100%;
  height: auto;
  display: block;
`;

const TransitionScreen = () => {
  return (
    <Container>
      <LogoContainer>
        <MarvelLogoImage src={marvelLogo} alt="Logo da Marvel" />
      </LogoContainer>
    </Container>
  );
};

export default TransitionScreen;
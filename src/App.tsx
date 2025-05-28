import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global';
import theme from './styles/theme';
import SplashScreen from './components/SplashScreen/SplashScreen';
import TransitionScreen from './components/TransitionScreen';
import styled, { createGlobalStyle } from 'styled-components';
import AuthScreen from './components/AuthScreen/AuthScreen';
import CharactersScreen from './components/CharacterScreen';

const AppContainer = styled.div`
  height: 100vh;
  overflow: hidden;
  width: 100vw;
`;

const RemoveBodyMarginPadding = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`;

let timer: NodeJS.Timeout | null = null;

function App() {
  const [currentScreen, setCurrentScreen] = useState<'splash' | 'transition' | 'auth' | 'characters'>('splash');
  const handleScreenChange = () => {
    if (currentScreen === 'splash') {
      timer = setTimeout(() => {
        setCurrentScreen('transition');
      }, 3000);
    } else if (currentScreen === 'transition') {
      timer = setTimeout(() => {
        setCurrentScreen('auth');
      }, 2000);
    }
  };

  useEffect(() => {
    handleScreenChange();

    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [currentScreen]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RemoveBodyMarginPadding />
      <AppContainer>
        {currentScreen === 'splash' && <SplashScreen />}
        {currentScreen === 'transition' && <TransitionScreen />}
        {currentScreen === 'auth' && <AuthScreen onLoginSuccess={() => setCurrentScreen('characters')} />}
        {currentScreen === 'characters' && <CharactersScreen />}
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
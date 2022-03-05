import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from './pages/Router';
import { GlobalStyle } from './styles/global';

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </>
  );
}

export default App;

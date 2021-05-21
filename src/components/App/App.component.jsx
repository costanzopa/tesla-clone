import React from 'react';
import Header from '../Header/Header.component.jsx';
import Home from '../Home/Home.component';

import { Container } from './App.style';

function App() {
  return (
    <Container>
      <Header />
      <Home />
    </Container>
  );
}

export default App;

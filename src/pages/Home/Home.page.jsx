import React from 'react';
import Header from '../../components/Header';
import Home from '../../components/Home';

import { Container } from './Home.style';
const HomePage = (props) => {
  return (
    <Container>
      <Header />
      <Home />
    </Container>
  );
};
export default HomePage;

import React from 'react';
import { Link } from 'react-router-dom';

import {
  Container,
  MenuContainer,
  MenuRightContainer,
  MenuRight,
  HamburguerMenu,
} from './Header.style';

const Header = (props) => {
  return (
    <Container>
      <Link to="/">
        <img src="logo.svg" alt="" />
      </Link>
      <MenuContainer>
        <Link>Model S</Link>
        <Link>Model 3</Link>
        <Link>Model X</Link>
        <Link>Model Y</Link>
      </MenuContainer>
      <MenuRightContainer>
        <MenuRight>
          <Link>Shop</Link>
          <Link>Tesla Account</Link>
        </MenuRight>
        <HamburguerMenu />
      </MenuRightContainer>
    </Container>
  );
};
export default Header;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import {
  Container,
  MenuContainer,
  MenuRightContainer,
  MenuRight,
  BurgerMenu,
  BurgerNav,
  BurgerNavCloseWrapper,
  BurgerNavClose,
} from './Header.style';

const Header = (props) => {
  const [burgerStatus, setBurgerStatus] = useState(false);
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
        <BurgerMenu onClick={() => setBurgerStatus(true)} />
      </MenuRightContainer>
      <BurgerNav show={burgerStatus}>
        <BurgerNavCloseWrapper>
          <BurgerNavClose onClick={() => setBurgerStatus(false)} />
        </BurgerNavCloseWrapper>

        <li>
          <Link>Existing Inventory</Link>
        </li>
        <li>
          <Link>Used Inventory</Link>
        </li>
        <li>
          <Link>Trade-in</Link>
        </li>
        <li>
          <Link>Cybertruck</Link>
        </li>
        <li>
          <Link>Roadaster</Link>
        </li>
      </BurgerNav>
    </Container>
  );
};
export default Header;

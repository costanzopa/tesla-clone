import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
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

import { selectMenuItems } from '../../features/menuItem/menuItemSlice';

const Header = (props) => {
  const [burgerStatus, setBurgerStatus] = useState(false);
  const cars = useSelector(selectMenuItems);

  return (
    <Container>
      <Link to="/">
        <img src="logo.svg" alt="" />
      </Link>
      <MenuContainer>
        {cars && cars.map((car, index) => <Link key={index}>{car}</Link>)}
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
        {cars &&
          cars.map((car, index) => (
            <li>
              <Link key={index}>{car}</Link>
            </li>
          ))}
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

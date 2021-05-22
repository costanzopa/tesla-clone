import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';

export const Container = styled.div`
  min-height: 60px;
  top: 0;
  right: 0;
  left: 0;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`;

export const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: center;

  & a {
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 600;
    padding: 0 10px;
    flex-wrap: nowrap;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const MenuRightContainer = styled.div`
  display: flex;
  align-items: center;
  & a {
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 600;
    margin-right: 10px;
    flex-wrap: nowrap;
  }
`;

export const MenuRight = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;

export const HamburguerMenu = styled(MenuIcon)`
  cursor: pointer;
`;

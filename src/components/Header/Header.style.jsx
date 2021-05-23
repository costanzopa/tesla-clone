import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

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
  z-index: 1;
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

export const BurgerMenu = styled(MenuIcon)`
  cursor: pointer;
`;

export const BurgerNav = styled.div`
  position: fixed;
  background-color: #ffffff;
  top: 0;
  bottom: 0;
  right: 0;
  width: 300px;
  z-index: 16;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${(props) => (props.show ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.2s;
  & li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    & a {
      text-decoration: none;
      font-weight: 600;
    }
  }
`;

export const BurgerNavCloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const BurgerNavClose = styled(CloseIcon)`
  cursor: pointer;
`;

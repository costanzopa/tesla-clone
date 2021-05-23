import styled, { css } from 'styled-components';

export const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: ${(props) => `url("/images/${props.bgImage}")`};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  scroll-snap-align: start;
`;

export const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;

  & p {
    color: #6a6e71;
    letter-spacing: -0.5px;
  }
  & span {
    border-bottom: 1px solid #393c41;
  }

  & span:hover {
    color: #000000;
    border-bottom: 2px solid #000000;
    cursor: pointer;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 70px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const LeftButton = styled.button`
  background-color: #333337;
  color: #ffffff;
  margin-right: 8px;
  opacity: 0.85;
  ${() => Button};

  @media (max-width: 768px) {
    margin-right: 0px;
    margin-bottom: 1em;
  }
`;

export const RightButton = styled.button`
  background-color: #ffffff;
  color: #000000;
  margin-left: 8px;
  opacity: 0.65;
  ${() => Button};

  @media (max-width: 768px) {
    margin-left: 0px;
    margin-bottom: 8px;
  }
`;

const Button = css`
  height: 42px;
  width: 256px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  padding: 2px;
  letter-spacing: 0.2em;
  font-weight: 500;
  border: none;

  @media (max-width: 768px) {
    width: 450px;
    height: 40px;
    letter-spacing: 0em;
  }
`;

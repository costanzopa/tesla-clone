import styled from 'styled-components';

export const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url('/images/model-s.jpg');
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

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
`;

export const LeftButton = styled.button``;

export const RightButton = styled.button``;

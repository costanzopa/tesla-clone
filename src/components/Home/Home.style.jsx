import styled from 'styled-components';
export const Container = styled.div`
  height: 100vh;
`;

export const FistSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const DownArrow = styled.img`
  position: absolute;
  height: 42px;
  animation: animateDown infinite 1.5s;
  bottom: 20px;

  @keyframes animateDown {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(5px);
    }
    60% {
      transform: translateY(3px);
    }
  }
`;

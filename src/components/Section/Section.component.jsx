import React from 'react';
import {
  Wrap,
  ItemText,
  ButtonsContainer,
  ButtonGroup,
  LeftButton,
  RightButton,
  DownArrow,
} from './Section.style';

const Section = ({
  title,
  description,
  backgroundImg,
  leftBtnText,
  rightBtnText,
}) => {
  return (
    <Wrap bgImage={backgroundImg}>
      <ItemText>
        <h1>{title}</h1>
        <p>{description}</p>
      </ItemText>
      <ButtonsContainer>
        <ButtonGroup>
          <LeftButton>{leftBtnText}</LeftButton>
          <RightButton>{rightBtnText}</RightButton>
        </ButtonGroup>
        <DownArrow src="/images/down-arrow.svg" alt="" />
      </ButtonsContainer>
    </Wrap>
  );
};
export default Section;

import React from 'react';
import {
  Wrap,
  ItemText,
  ButtonGroup,
  LeftButton,
  RightButton,
} from './Section.style';

const Section = (props) => {
  return (
    <Wrap>
      <ItemText>
        <h1>Model S</h1>
        <p>
          Order Online for <span>Touchless Delivery</span>
        </p>
      </ItemText>
      <ButtonGroup>
        <LeftButton>Custom Order</LeftButton>
        <RightButton>Existing Inventory</RightButton>
      </ButtonGroup>
    </Wrap>
  );
};
export default Section;

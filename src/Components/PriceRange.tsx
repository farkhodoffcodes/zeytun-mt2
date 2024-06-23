import React from 'react';
import styled from 'styled-components';

const PriceContainer = styled.div`
  margin-bottom: 20px;
`;

const PriceTitle = styled.h3`
  font-size: 16px;
  margin-bottom: 10px;
`;

const PriceInputs = styled.div`
  display: flex;
  align-items: center;
`;

const PriceInput = styled.input`
  width: 80px;
  margin: 0 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 5px;
`;

const PriceRangeSlider = styled.input`
  width: 100%;
  margin: 10px 0;
`;

const PriceRange: React.FC = () => {
  return (
    <PriceContainer>
      <PriceTitle>Цена</PriceTitle>
      <PriceInputs>
        <PriceInput type="number" placeholder="от" />
        -
        <PriceInput type="number" placeholder="до" />
      </PriceInputs>
      <PriceRangeSlider type="range" min="394020" max="12942010" />
    </PriceContainer>
  );
};

export default PriceRange;

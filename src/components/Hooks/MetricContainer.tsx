import React from 'react';
import styled from 'styled-components/native';

// components
import InputField from '../InputField';

// hooks
import {useUnitContext} from 'hooks';

const MetricContainer = () => {
  const {kg, meter, setKg, setMeter} = useUnitContext();

  return (
    <Wrapper>
      <InputField label="kg" value={kg} onChangeText={val => setKg(val)} />
      <InputField label="m" value={meter} onChangeText={val => setMeter(val)} />
    </Wrapper>
  );
};

export default MetricContainer;

const Wrapper = styled.View`
  width: 100%;
`;

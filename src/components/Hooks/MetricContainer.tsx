import React, {useContext} from 'react';
import styled from 'styled-components/native';

// components
import InputField from '../InputField';

// context
import {UnitContext} from 'context';

const MetricContainer = () => {
  const unitContext = useContext(UnitContext);
  return (
    <Wrapper>
      <InputField
        label="kg"
        value={unitContext?.kg}
        onChangeText={val => unitContext?.setKg(val)}
      />
      <InputField
        label="m"
        value={unitContext?.meter}
        onChangeText={val => unitContext?.setMeter(val)}
      />
    </Wrapper>
  );
};

export default MetricContainer;

const Wrapper = styled.View`
  width: 100%;
`;
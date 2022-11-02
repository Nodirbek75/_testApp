import React from 'react';
import styled from 'styled-components/native';

// components
import InputField from '../InputField';

// mobx
import observableUnitStore from 'mobx/unitStore';

const MetricContainer = () => {
  return (
    <Wrapper>
      <InputField
        label="kg"
        value={observableUnitStore?.kg}
        onChangeText={val => observableUnitStore?.setKg(val)}
      />
      <InputField
        label="m"
        value={observableUnitStore?.meter}
        onChangeText={val => observableUnitStore?.setMeter(val)}
      />
    </Wrapper>
  );
};

export default MetricContainer;

const Wrapper = styled.View`
  width: 100%;
`;

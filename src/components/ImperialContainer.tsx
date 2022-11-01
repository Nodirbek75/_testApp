import React, {useContext} from 'react';
import {UnitContext} from 'screens/Hooks';
import styled from 'styled-components/native';

// components
import InputField from './InputField';

const ImperialContainer = () => {
  const unitContext = useContext(UnitContext);
  return (
    <Wrapper>
      <InputField
        label="lps"
        value={unitContext?.kg}
        onChangeText={val => unitContext?.setKg(val)}
      />
      <RowWrapper>
        <InputField
          label="ft"
          value={unitContext?.meter}
          onChangeText={val => unitContext?.setMeter(val)}
          half
        />
        <Space />
        <InputField
          label="in"
          value={unitContext?.meter}
          onChangeText={val => unitContext?.setMeter(val)}
          half
        />
      </RowWrapper>
    </Wrapper>
  );
};

export default ImperialContainer;

const Wrapper = styled.View`
  width: 100%;
`;

const RowWrapper = styled.View<{half: boolean; marginRight: boolean}>`
  flex-direction: row;
  align-items: center;
`;

const Space = styled.View`
  width: 20px;
`;

import React from 'react';
import styled from 'styled-components/native';

// components
import InputField from '../InputField';

// hooks
import {useUnitContext} from 'hooks';

const ImperialContainer = () => {
  const {lps, foot, inch, setLps, setFoot, setInch} = useUnitContext();

  return (
    <Wrapper>
      <InputField label="lps" value={lps} onChangeText={val => setLps(val)} />
      <RowWrapper>
        <InputField
          label="ft"
          value={foot}
          onChangeText={val => setFoot(val)}
          half
        />
        <Space />
        <InputField
          label="in"
          value={inch}
          onChangeText={val => setInch(val)}
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

import React, {useContext} from 'react';
import styled from 'styled-components/native';

// components
import InputField from './InputField';

// context
import {UnitContext} from 'context';

const ImperialContainer = () => {
  const unitContext = useContext(UnitContext);
  return (
    <Wrapper>
      <InputField
        label="lps"
        value={unitContext?.lps}
        onChangeText={val => unitContext?.setLps(val)}
      />
      <RowWrapper>
        <InputField
          label="ft"
          value={unitContext?.foot}
          onChangeText={val => unitContext?.setFoot(val)}
          half
        />
        <Space />
        <InputField
          label="in"
          value={unitContext?.inch}
          onChangeText={val => unitContext?.setInch(val)}
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

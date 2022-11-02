import React from 'react';
import styled from 'styled-components/native';
import {observer} from 'mobx-react';

// components
import InputField from '../InputField';

// mobx
import {observableUnitStore} from 'mobx';

const ImperialContainer = observer(() => {
  return (
    <Wrapper>
      <InputField
        label="lps"
        value={observableUnitStore?.lps}
        onChangeText={val => observableUnitStore?.setLps(val)}
      />
      <RowWrapper>
        <InputField
          label="ft"
          value={observableUnitStore?.foot}
          onChangeText={val => observableUnitStore?.setFoot(val)}
          half
        />
        <Space />
        <InputField
          label="in"
          value={observableUnitStore?.inch}
          onChangeText={val => observableUnitStore?.setInch(val)}
          half
        />
      </RowWrapper>
    </Wrapper>
  );
});

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

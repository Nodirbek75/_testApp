import React from 'react';
import styled from 'styled-components/native';

// components
import {Buttons, ImperialContainer, MetricContainer} from 'components/Hooks';
import {Button, TextButton} from 'components';

// hooks
import {useUnitContext} from 'hooks';

const Hooks = () => {
  const {unit, saveToDisk, reset} = useUnitContext();

  return (
    <Wrapper>
      <Title>Unit converter (with hooks)</Title>
      {unit === 'imperial' ? <ImperialContainer /> : <MetricContainer />}
      <Buttons />
      <Button onPress={saveToDisk} />
      <TextButton onPress={reset} />
    </Wrapper>
  );
};

export default Hooks;

const Wrapper = styled.View`
  flex: 1;
  background-color: #1b1b1b;
  justify-content: center;
  align-items: center;
  padding-horizontal: 25px;
`;

const Title = styled.Text`
  font-size: 18px;
  color: #fff;
  margin-bottom: 20px;
`;

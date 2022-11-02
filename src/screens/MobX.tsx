import React, {useEffect} from 'react';
import styled from 'styled-components/native';
import {observer} from 'mobx-react';

// components
import {Buttons, ImperialContainer, MetricContainer} from 'components/MobX';
import {Button, TextButton} from 'components';

// mobx
import observableUnitStore from 'mobx/unitStore';

const MobX = observer(() => {
  useEffect(() => {
    observableUnitStore.fetchFromDisk();
  }, []);

  return (
    <Wrapper>
      <Title>Unit converter (with mobx)</Title>
      {observableUnitStore.unit === 'imperial' ? (
        <ImperialContainer />
      ) : (
        <MetricContainer />
      )}
      <Buttons />
      <Button onPress={observableUnitStore.saveToDisk} />
      <TextButton onPress={observableUnitStore.reset} />
    </Wrapper>
  );
});

export default MobX;

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

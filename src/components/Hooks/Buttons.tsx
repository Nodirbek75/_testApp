import React from 'react';
import styled from 'styled-components/native';

// hooks
import {useUnitContext} from 'hooks';

const Buttons: React.FC = () => {
  const {unit, setUnit} = useUnitContext();

  return (
    <Wrapper>
      <Button
        left
        active={unit === 'imperial'}
        onPress={() => setUnit('imperial')}>
        <Text active={unit === 'imperial'}>Imperial</Text>
      </Button>
      <Button
        right
        active={unit === 'metric'}
        onPress={() => setUnit('metric')}>
        <Text active={unit === 'metric'}>Metric</Text>
      </Button>
    </Wrapper>
  );
};

export default Buttons;

const Wrapper = styled.View`
  flex-direction: row;
`;

const Button = styled.TouchableOpacity<{
  active: boolean;
  left: boolean;
  right: boolean;
}>`
  flex: 1;
  align-items: center;
  justify-content: center;
  border-top-left-radius: ${props => (props.left ? 20 : 0)}px;
  border-bottom-left-radius: ${props => (props.left ? 20 : 0)}px;
  border-top-right-radius: ${props => (props.right ? 20 : 0)}px;
  border-bottom-right-radius: ${props => (props.right ? 20 : 0)}px;
  background-color: ${props => (props.active ? '#14b009' : '#fff')};
  padding-vertical: 15px;
`;

const Text = styled.Text<{active: boolean}>`
  font-size: 16px;
  color: ${props => (props.active ? '#fff' : '#000')};
`;

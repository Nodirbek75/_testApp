import React, {useContext} from 'react';
import styled from 'styled-components/native';

// context
import {UnitContext} from 'context';

const Buttons: React.FC = () => {
  const unitContext = useContext(UnitContext);
  return (
    <Wrapper>
      <Button
        left
        active={unitContext?.unit === 'imperial'}
        onPress={() => unitContext?.setUnit('imperial')}>
        <Text active={unitContext?.unit === 'imperial'}>Imperial</Text>
      </Button>
      <Button
        right
        active={unitContext?.unit === 'metric'}
        onPress={() => unitContext?.setUnit('metric')}>
        <Text active={unitContext?.unit === 'metric'}>Metric</Text>
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

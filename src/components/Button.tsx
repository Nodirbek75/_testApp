import React from 'react';
import styled from 'styled-components/native';

type Props = {
  onPress: () => void;
};

const Button: React.FC<Props> = ({onPress}) => {
  return (
    <Wrapper onPress={onPress}>
      <Text>Save to disk</Text>
    </Wrapper>
  );
};

export default Button;

const Wrapper = styled.TouchableOpacity`
  border-radius: 100px;
  background-color: #14b009;
  margin-top: 20px;
  padding-vertical: 10px;
  padding-horizontal: 40px;
`;

const Text = styled.Text`
  font-size: 16px;
  color: #fff;
`;

import React from 'react';
import styled from 'styled-components/native';
type Props = {
  onPress: () => void;
};
const TextButton: React.FC<Props> = ({onPress}) => {
  return (
    <Wrapper onPress={onPress}>
      <Text>Reset</Text>
    </Wrapper>
  );
};

export default TextButton;

const Wrapper = styled.TouchableOpacity`
  margin-top: 20px;
`;

const Text = styled.Text`
  font-size: 16px;
  color: blue;
`;

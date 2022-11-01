import React from 'react';
import styled from 'styled-components/native';

type Props = {
  half?: boolean;
  label: string;
  value?: number;
  onChangeText: (val: number) => void;
};

const InputField: React.FC<Props> = ({half, label, value, onChangeText}) => {
  return (
    <RowWrapper half={half}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        keyboardType={'numeric'}
      />
      <Label>{label}</Label>
    </RowWrapper>
  );
};

export default InputField;

const RowWrapper = styled.View<{half: boolean}>`
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
  flex: ${props => (props.half ? 1 : 'none')};
`;

const TextInput = styled.TextInput`
  height: 40px;
  flex: 1;
  border-radius: 100px;
  border: 1px solid #aaa;
  color: #fff;
  padding-horizontal: 15px;
`;

const Label = styled.Text`
  font-size: 16px;
  color: #fff;
  margin-left: 10px;
`;

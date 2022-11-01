import {Buttons, ImperialContainer, MetricContainer} from 'components';
import React, {useEffect, useState} from 'react';
import styled from 'styled-components/native';
import {createContext} from 'react';

export interface UnitContextInterface {
  kg: number;
  meter: number;
  setMeter: (val: number) => void;
  setKg: (val: number) => void;
  unit: 'imperial' | 'metric';
  setUnit: (val: 'imperial' | 'metric') => void;
}

export const UnitContext = createContext<UnitContextInterface | undefined>(
  undefined,
);

const Hooks = () => {
  const [kg, setKg] = useState(0);
  const [meter, setMeter] = useState(0);
  const [unit, setUnit] = useState<'imperial' | 'metric'>('imperial');

  return (
    <UnitContext.Provider
      value={{
        kg,
        setKg,
        meter,
        setMeter,
        unit,
        setUnit,
      }}>
      <Wrapper>
        <Title>Unit converter (with hooks)</Title>
        {unit === 'imperial' ? <ImperialContainer /> : <MetricContainer />}
        <Buttons />
      </Wrapper>
    </UnitContext.Provider>
  );
};

export default Hooks;

const Wrapper = styled.View`
  flex: 1;
  background-color: purple;
  justify-content: center;
  padding-horizontal: 25px;
`;

const Title = styled.Text`
  font-size: 18px;
  color: #fff;
  margin-bottom: 20px;
`;

import {
  Button,
  Buttons,
  ImperialContainer,
  MetricContainer,
  TextButton,
} from 'components';
import React, {useState} from 'react';
import styled from 'styled-components/native';
import {createContext} from 'react';

export interface UnitContextInterface {
  kg: string;
  meter: string;
  lps: string;
  foot: string;
  inch: string;
  unit: 'imperial' | 'metric';
  setKg: (val: string) => void;
  setMeter: (val: string) => void;
  setLps: (val: string) => void;
  setFoot: (val: string) => void;
  setInch: (val: string) => void;
  setUnit: (val: 'imperial' | 'metric') => void;
}

export const UnitContext = createContext<UnitContextInterface | undefined>(
  undefined,
);

const Hooks = () => {
  const [kg, setKg] = useState('');
  const [meter, setMeter] = useState('');
  const [lps, setLps] = useState('');
  const [foot, setFoot] = useState('');
  const [inch, setInch] = useState('');
  const [unit, setUnit] = useState<'imperial' | 'metric'>('imperial');

  const enterKg = (val: string) => {
    setKg(val);
    setLps((Number(val) / 0.45359237).toFixed(5));
  };
  const enterMeter = (val: string) => {
    setMeter(val);
    setFoot((Number(val) * 3.2808).toFixed(5).split('.')[0]);
    setInch((Number(val) * 3.2808).toFixed(5).split('.')[1]);
  };
  const enterLps = (val: string) => {
    setLps(val);
    setKg((Number(val) * 0.45359237).toFixed(5));
  };
  const enterFoot = (val: string) => {
    setFoot(val);
    setMeter((Number(`${val}.${inch}`) / 3.2808).toFixed(5));
  };
  const enterInch = (val: string) => {
    setInch(val);
    setMeter((Number(`${foot}.${val}`) / 3.2808).toFixed(5));
  };

  return (
    <UnitContext.Provider
      value={{
        kg,
        meter,
        lps,
        foot,
        inch,
        unit,
        setKg: enterKg,
        setMeter: enterMeter,
        setLps: enterLps,
        setFoot: enterFoot,
        setInch: enterInch,
        setUnit,
      }}>
      <Wrapper>
        <Title>Unit converter (with hooks)</Title>
        {unit === 'imperial' ? <ImperialContainer /> : <MetricContainer />}
        <Buttons />
        <Button onPress={() => {}} />
        <TextButton onPress={() => {}} />
      </Wrapper>
    </UnitContext.Provider>
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

import React, {useEffect, useState} from 'react';
import styled from 'styled-components/native';
import {createContext} from 'react';

// components
import {Buttons, ImperialContainer, MetricContainer} from 'components/Hooks';
import {Button, TextButton} from 'components';

// utils
import {
  convertFtInchToM,
  convertKgToLps,
  convertLpsToKg,
  convertMToFt,
  convertMToInch,
  getFromAsyncStorage,
  saveToAsyncStorage,
} from 'utils';

// context
import {UnitContext} from 'context';

const Hooks = () => {
  const [kg, setKg] = useState('');
  const [lps, setLps] = useState('');
  const [meter, setMeter] = useState('');
  const [foot, setFoot] = useState('');
  const [inch, setInch] = useState('');
  const [unit, setUnit] = useState<'imperial' | 'metric'>('imperial');

  useEffect(() => {
    fetchFromDisk();
  }, []);

  const enterKg = (val: string) => {
    setKg(val);
    setLps(convertKgToLps(val));
  };
  const enterLps = (val: string) => {
    setLps(val);
    setKg(convertLpsToKg(val));
  };
  const enterMeter = (val: string) => {
    setMeter(val);
    setFoot(convertMToFt(val));
    setInch(convertMToInch(val));
  };
  const enterFoot = (val: string) => {
    setFoot(val);
    setMeter(convertFtInchToM(val, inch));
    if (inch === '') {
      setInch('0');
    }
  };
  const enterInch = (val: string) => {
    setInch(val);
    setMeter(convertFtInchToM(foot, val));
    if (foot === '') {
      setFoot('0');
    }
  };

  const saveToDisk = () => {
    saveToAsyncStorage({
      kg,
      lps,
      meter,
      foot,
      inch,
      unit,
    });
  };

  const fetchFromDisk = async () => {
    const units = await getFromAsyncStorage('@storage_Units');
    if (units) {
      setKg(units.kg);
      setLps(units.lps);
      setMeter(units.meter);
      setFoot(units.foot);
      setInch(units.inch);
      setUnit(units.unit);
    }
  };

  const resetHandler = () => {
    setKg('');
    setLps('');
    setMeter('');
    setFoot('');
    setInch('');
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
        <Button onPress={saveToDisk} />
        <TextButton onPress={resetHandler} />
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

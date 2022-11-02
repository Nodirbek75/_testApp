import React, {createContext, useEffect, useState} from 'react';

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
  saveToDisk: () => void;
  fetchFromDisk: () => void;
  reset: () => void;
}

export const UnitContext = createContext<UnitContextInterface | any>(undefined);

export const UnitProvider: React.FC<{children: any}> = ({children}) => {
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
    saveToAsyncStorage('@storage_Hooks_Units', {
      kg,
      lps,
      meter,
      foot,
      inch,
      unit,
    });
  };

  const fetchFromDisk = async () => {
    const units = await getFromAsyncStorage('@storage_Hooks_Units');
    if (units) {
      setKg(units.kg);
      setLps(units.lps);
      setMeter(units.meter);
      setFoot(units.foot);
      setInch(units.inch);
      setUnit(units.unit);
    }
  };

  const reset = () => {
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
        saveToDisk,
        fetchFromDisk,
        reset,
      }}>
      {children}
    </UnitContext.Provider>
  );
};

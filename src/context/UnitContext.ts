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

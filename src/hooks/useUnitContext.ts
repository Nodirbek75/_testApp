import {useContext} from 'react';
import {UnitContext, UnitContextInterface} from 'context';

export const useUnitContext = () => {
  const context: UnitContextInterface = useContext(UnitContext);
  return context;
};

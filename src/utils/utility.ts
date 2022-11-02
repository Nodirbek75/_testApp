import AsyncStorage from '@react-native-async-storage/async-storage';

export const convertMToFt = (m: string) => {
  return (Number(m) * 3.2808).toFixed(5).split('.')[0];
};

export const convertMToInch = (m: string) => {
  return (Number(m) * 3.2808).toFixed(5).split('.')[1];
};

export const convertFtInchToM = (ft: string, inch: string) => {
  return (Number(`${ft}.${inch}`) / 3.2808).toFixed(5);
};

export const convertKgToLps = (kg: string) => {
  return (Number(kg) / 0.45359237).toFixed(5);
};

export const convertLpsToKg = (lps: string) => {
  return (Number(lps) * 0.45359237).toFixed(5);
};

export const saveToAsyncStorage = async (key: string, units: {}) => {
  await AsyncStorage.setItem(key, JSON.stringify(units));
};

export const getFromAsyncStorage = async (key: string) => {
  const jsonValue = await AsyncStorage.getItem(key);
  return jsonValue != null ? JSON.parse(jsonValue) : null;
};

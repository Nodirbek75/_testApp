import {action, makeObservable, observable} from 'mobx';
import {
  convertFtInchToM,
  convertKgToLps,
  convertLpsToKg,
  convertMToFt,
  convertMToInch,
  getFromAsyncStorage,
  saveToAsyncStorage,
} from 'utils';

class ObservableUnitStore {
  kg: string = '';
  lps: string = '';
  meter: string = '';
  foot: string = '';
  inch: string = '';
  unit: 'imperial' | 'metric' = 'imperial';

  constructor() {
    makeObservable(this, {
      kg: observable,
      lps: observable,
      meter: observable,
      foot: observable,
      inch: observable,
      unit: observable,
      setKg: action.bound,
      setLps: action.bound,
      setMeter: action.bound,
      setFoot: action.bound,
      setInch: action.bound,
      setUnit: action.bound,
      saveToDisk: action.bound,
      fetchFromDisk: action.bound,
      reset: action.bound,
    });
  }

  setKg(val: string) {
    this.kg = val;
    this.lps = convertKgToLps(val);
  }

  setLps(val: string) {
    this.lps = val;
    this.kg = convertLpsToKg(val);
  }

  setMeter(val: string) {
    this.meter = val;
    this.foot = convertMToFt(val);
    this.inch = convertMToInch(val);
  }

  setFoot(val: string) {
    this.foot = val;
    this.meter = convertFtInchToM(val, this.inch);
    if (this.inch === '') {
      this.inch = '0';
    }
  }

  setInch(val: string) {
    this.inch = val;
    this.meter = convertFtInchToM(this.foot, val);
    if (this.foot === '') {
      this.foot = '0';
    }
  }

  setUnit(val: 'imperial' | 'metric') {
    this.unit = val;
  }

  saveToDisk() {
    saveToAsyncStorage('@storage_MobX_Units', {
      kg: this.kg,
      meter: this.meter,
      lps: this.lps,
      foot: this.foot,
      inch: this.inch,
      unit: this.unit,
    });
  }

  async fetchFromDisk() {
    const units = await getFromAsyncStorage('@storage_MobX_Units');
    if (units) {
      this.setKg(units.kg);
      this.setLps(units.lps);
      this.setMeter(units.meter);
      this.setFoot(units.foot);
      this.setInch(units.inch);
      this.setUnit(units.unit);
    }
  }

  reset() {
    this.kg = '';
    this.lps = '';
    this.meter = '';
    this.foot = '';
    this.inch = '';
  }
}

const observableUnitStore = new ObservableUnitStore();
export default observableUnitStore;

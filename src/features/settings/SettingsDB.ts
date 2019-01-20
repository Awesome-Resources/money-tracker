import { SettingsJsonT } from './SettingsStore';
import { MoneySettingsJsonT } from './MoneySettingsStore';

export class SettingsDB {
  static async loadJson(): Promise<SettingsJsonT> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          isSetupComplete: false,
          money: {
            exchangeRate: { USD: 1 },
            baseCurrency: 'USD',
            currencies: [],
            stocks: []
          },
          groups: [{ id: 'G0001', name: 'Cash', order: 0 }],
          categories: []
        });
      }, 500);
    });
  }
  static async saveSetupComplete(isSetupComplete: boolean): Promise<void> {
    console.log('saving is complete', isSetupComplete);
  }
  static async saveMoneySettings(settings: MoneySettingsJsonT): Promise<void> {
    console.log('saving money', settings);
  }
}

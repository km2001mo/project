import axios from 'axios';

export interface ExchangeRate {
  code: string;
  name: string;
  rate: number;
  last_updated: string;
}

// Using Exchange Rates API
const EXCHANGE_API_URL = 'https://api.exchangerate-api.com/v4/latest/USD';

export const currencyApi = {
  async getExchangeRates(): Promise<ExchangeRate[]> {
    try {
      const response = await axios.get(EXCHANGE_API_URL);
      const rates = response.data.rates;
      
      const currencyNames: { [key: string]: string } = {
        USD: 'US Dollar',
        EUR: 'Euro',
        GBP: 'British Pound',
        JPY: 'Japanese Yen',
        AUD: 'Australian Dollar',
        CAD: 'Canadian Dollar',
        CHF: 'Swiss Franc',
        CNY: 'Chinese Yuan',
        HKD: 'Hong Kong Dollar',
        NZD: 'New Zealand Dollar',
        SEK: 'Swedish Krona',
        KRW: 'South Korean Won',
        SGD: 'Singapore Dollar',
        NOK: 'Norwegian Krone',
        MXN: 'Mexican Peso',
        INR: 'Indian Rupee',
        RUB: 'Russian Ruble',
        ZAR: 'South African Rand',
        TRY: 'Turkish Lira',
        BRL: 'Brazilian Real',
      };

      return Object.entries(rates)
        .filter(([code]) => code in currencyNames)
        .map(([code, rate]) => ({
          code,
          name: currencyNames[code],
          rate: Number(rate),
          last_updated: new Date().toISOString()
        }));
    } catch (error) {
      console.error('Error fetching exchange rates:', error);
      throw error;
    }
  }
};
import axios from 'axios';

export interface ExchangeRate {
  code: string;
  name: string;
  rate: number;
}

export interface CryptoCurrency {
  id: string;
  symbol: string;
  name: string;
  current_price: number;
  market_cap: number;
  total_volume: number;
  price_change_percentage_24h: number;
  sparkline_in_7d: { price: number[] };
}

const COINGECKO_API_URL = 'https://api.coingecko.com/api/v3';

export const api = {
  async getExchangeRates(): Promise<ExchangeRate[]> {
    return [
      { code: 'USD', name: 'US Dollar', rate: 1 },
      { code: 'EUR', name: 'Euro', rate: 0.92 },
      { code: 'GBP', name: 'British Pound', rate: 0.79 },
      { code: 'JPY', name: 'Japanese Yen', rate: 151.67 },
      { code: 'AUD', name: 'Australian Dollar', rate: 1.53 },
      { code: 'CAD', name: 'Canadian Dollar', rate: 1.36 },
      { code: 'CHF', name: 'Swiss Franc', rate: 0.90 },
      { code: 'CNY', name: 'Chinese Yuan', rate: 7.23 },
      { code: 'NZD', name: 'New Zealand Dollar', rate: 1.67 },
      { code: 'SGD', name: 'Singapore Dollar', rate: 1.35 },
      { code: 'INR', name: 'Indian Rupee', rate: 83.25 },
      { code: 'BRL', name: 'Brazilian Real', rate: 5.03 },
      { code: 'ZAR', name: 'South African Rand', rate: 18.95 },
      { code: 'MXN', name: 'Mexican Peso', rate: 17.15 },
      { code: 'KRW', name: 'South Korean Won', rate: 1338.76 },
      { code: 'RUB', name: 'Russian Ruble', rate: 92.50 },
      { code: 'TRY', name: 'Turkish Lira', rate: 31.85 },
      { code: 'SAR', name: 'Saudi Riyal', rate: 3.75 },
      { code: 'AED', name: 'UAE Dirham', rate: 3.67 },
      { code: 'HKD', name: 'Hong Kong Dollar', rate: 7.82 }
    ];
  },

  async getCryptoPrices(): Promise<CryptoCurrency[]> {
    try {
      const response = await axios.get(`${COINGECKO_API_URL}/coins/markets`, {
        params: {
          vs_currency: 'usd',
          order: 'market_cap_desc',
          per_page: 100,
          sparkline: true,
          price_change_percentage: '24h'
        }
      });

      return response.data.map((coin: any) => ({
        id: coin.id,
        symbol: coin.symbol,
        name: coin.name,
        current_price: coin.current_price,
        market_cap: coin.market_cap,
        total_volume: coin.total_volume,
        price_change_percentage_24h: coin.price_change_percentage_24h,
        sparkline_in_7d: {
          price: coin.sparkline_in_7d?.price || []
        }
      }));
    } catch (error) {
      console.error('Error fetching crypto prices:', error);
      return [];
    }
  }
};
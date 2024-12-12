import axios from 'axios';

export interface MetalPrice {
  symbol: string;
  price: number;
  change_percentage: number;
  last_updated: string;
}

// Fallback to mock data if API key is not available
const mockMetalPrices: MetalPrice[] = [
  {
    symbol: 'XAU',
    price: 2172.50,
    change_percentage: 0.45,
    last_updated: new Date().toISOString()
  },
  {
    symbol: 'XAG',
    price: 24.85,
    change_percentage: 0.32,
    last_updated: new Date().toISOString()
  }
];

export const metalPricesApi = {
  async getMetalPrices(): Promise<MetalPrice[]> {
    const API_KEY = import.meta.env.VITE_METALS_API_KEY;
    
    // Use mock data if no API key is available
    if (!API_KEY || API_KEY === 'goldapi-demo-key') {
      return mockMetalPrices;
    }

    try {
      const [goldResponse, silverResponse] = await Promise.all([
        axios.get('https://www.goldapi.io/api/XAU/USD', {
          headers: {
            'x-access-token': API_KEY,
            'Content-Type': 'application/json'
          }
        }),
        axios.get('https://www.goldapi.io/api/XAG/USD', {
          headers: {
            'x-access-token': API_KEY,
            'Content-Type': 'application/json'
          }
        })
      ]);

      return [
        {
          symbol: 'XAU',
          price: goldResponse.data.price,
          change_percentage: goldResponse.data.ch,
          last_updated: new Date(goldResponse.data.timestamp * 1000).toISOString()
        },
        {
          symbol: 'XAG',
          price: silverResponse.data.price,
          change_percentage: silverResponse.data.ch,
          last_updated: new Date(silverResponse.data.timestamp * 1000).toISOString()
        }
      ];
    } catch (error) {
      console.error('Error fetching metal prices:', error);
      return mockMetalPrices;
    }
  }
};
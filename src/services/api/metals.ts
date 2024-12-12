import axios from 'axios';
import { MetalPrice } from '../../types/metals';
import { MOCK_METAL_PRICES } from '../mocks/metalPrices';

const API_URL = 'https://www.goldapi.io/api';

export async function getMetalPrices(): Promise<MetalPrice[]> {
  const API_KEY = import.meta.env.VITE_METALS_API_KEY;
  
  if (!API_KEY || API_KEY === 'goldapi-demo-key') {
    return MOCK_METAL_PRICES;
  }

  try {
    const [goldResponse, silverResponse] = await Promise.all([
      axios.get(`${API_URL}/XAU/USD`, {
        headers: { 'x-access-token': API_KEY }
      }),
      axios.get(`${API_URL}/XAG/USD`, {
        headers: { 'x-access-token': API_KEY }
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
    return MOCK_METAL_PRICES;
  }
}
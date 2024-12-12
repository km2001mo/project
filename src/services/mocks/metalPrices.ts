import { MetalPrice } from '../../types/metals';

export const MOCK_METAL_PRICES: MetalPrice[] = [
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
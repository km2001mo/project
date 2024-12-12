import React from 'react';
import { PriceChart } from '../charts/PriceChart';
import { CryptoCurrency } from '../../services/api';

interface CryptoChartProps {
  crypto: CryptoCurrency;
}

export function CryptoChart({ crypto }: CryptoChartProps) {
  // Generate mock historical data if sparkline data is empty
  const chartData = crypto.sparkline_in_7d.price.length > 0
    ? crypto.sparkline_in_7d.price.map((price, index) => ({
        name: `Day ${index + 1}`,
        value: price
      }))
    : Array.from({ length: 7 }, (_, i) => ({
        name: `Day ${i + 1}`,
        value: crypto.current_price * (1 + (Math.random() * 0.1 - 0.05))
      }));

  return (
    <div className="bg-[#1B263B] rounded-lg shadow-lg p-6">
      <h2 className="text-white text-xl font-bold mb-4">
        {crypto.name} ({crypto.symbol.toUpperCase()}) Price Chart
      </h2>
      <PriceChart data={chartData} color="#00FF00" />
    </div>
  );
}
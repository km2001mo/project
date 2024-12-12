import React from 'react';
import { PriceChart } from '../components/charts/PriceChart';
import { useMetalPrices } from '../hooks/useMetalPrices';

export function PreciousMetals() {
  const { prices, loading, error } = useMetalPrices();

  const goldPrice = prices.find(p => p.symbol === 'XAU');
  const silverPrice = prices.find(p => p.symbol === 'XAG');

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-lg text-gray-600">Loading precious metal prices...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-lg text-red-600">{error}</div>
      </div>
    );
  }

  // Generate historical data for the chart
  const generateHistoricalData = (basePrice: number) => {
    return Array.from({ length: 30 }, (_, i) => ({
      name: `Day ${i + 1}`,
      value: basePrice + (Math.random() * basePrice * 0.02) - (basePrice * 0.01),
    }));
  };

  const goldHistoricalData = generateHistoricalData(goldPrice?.price || 1800);
  const silverHistoricalData = generateHistoricalData(silverPrice?.price || 22);

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-[#1B263B]">Gold & Silver Prices</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-[#1B263B] rounded-lg shadow-lg p-6">
          <h2 className="text-[#FFD700] text-xl font-bold mb-4">Gold</h2>
          <div className="text-[#FFD700] text-4xl font-bold mb-2">
            ${goldPrice?.price.toFixed(2)}
          </div>
          <div className="text-white/60">per ounce</div>
          <div className={`mt-4 ${goldPrice?.change_percentage >= 0 ? 'text-green-400' : 'text-red-400'}`}>
            {goldPrice?.change_percentage.toFixed(2)}%
          </div>
          <div className="mt-4">
            <PriceChart data={goldHistoricalData} color="#FFD700" />
          </div>
        </div>
        
        <div className="bg-[#1B263B] rounded-lg shadow-lg p-6">
          <h2 className="text-[#C0C0C0] text-xl font-bold mb-4">Silver</h2>
          <div className="text-[#C0C0C0] text-4xl font-bold mb-2">
            ${silverPrice?.price.toFixed(2)}
          </div>
          <div className="text-white/60">per ounce</div>
          <div className={`mt-4 ${silverPrice?.change_percentage >= 0 ? 'text-green-400' : 'text-red-400'}`}>
            {silverPrice?.change_percentage.toFixed(2)}%
          </div>
          <div className="mt-4">
            <PriceChart data={silverHistoricalData} color="#C0C0C0" />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-bold text-[#1B263B] mb-4">Last Updated</h2>
        <p className="text-gray-600">
          {new Date(goldPrice?.last_updated || '').toLocaleString()}
        </p>
      </div>
    </div>
  );
}
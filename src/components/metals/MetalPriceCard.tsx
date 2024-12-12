import React from 'react';
import { MetalPrice } from '../../types/metals';
import { PriceChart } from '../charts/PriceChart';
import { formatCurrency, formatDate } from '../../utils/formatters';

interface MetalPriceCardProps {
  metal: MetalPrice;
  color: string;
  historicalData: Array<{ name: string; value: number }>;
}

export function MetalPriceCard({ metal, color, historicalData }: MetalPriceCardProps) {
  return (
    <div className="bg-[#1B263B] rounded-lg shadow-lg p-6">
      <h2 className={`text-[${color}] text-xl font-bold mb-4`}>
        {metal.symbol === 'XAU' ? 'Gold' : 'Silver'}
      </h2>
      <div className={`text-[${color}] text-4xl font-bold mb-2`}>
        {formatCurrency(metal.price)}
      </div>
      <div className="text-white/60">per ounce</div>
      <div className={`mt-4 ${metal.change_percentage >= 0 ? 'text-green-400' : 'text-red-400'}`}>
        {metal.change_percentage.toFixed(2)}%
      </div>
      <div className="mt-4">
        <PriceChart data={historicalData} color={color} />
      </div>
      <div className="mt-4 text-white/60 text-sm">
        Last updated: {formatDate(metal.last_updated)}
      </div>
    </div>
  );
}
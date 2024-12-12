import React from 'react';
import { CryptoCurrency } from '../../services/api';

interface CryptoPriceCardProps {
  crypto: CryptoCurrency;
  onClick: () => void;
}

export function CryptoPriceCard({ crypto, onClick }: CryptoPriceCardProps) {
  return (
    <div 
      className="bg-white/10 rounded-lg p-4 cursor-pointer hover:bg-white/20 transition-colors"
      onClick={onClick}
    >
      <h3 className="text-white font-semibold">{crypto.name}</h3>
      <p className="text-[#00FF00] text-2xl font-bold mt-2">
        ${crypto.current_price.toLocaleString()}
      </p>
      <p className="text-white/60 text-sm">
        24h: <span className={crypto.price_change_percentage_24h >= 0 ? 'text-green-400' : 'text-red-400'}>
          {crypto.price_change_percentage_24h.toFixed(2)}%
        </span>
      </p>
    </div>
  );
}
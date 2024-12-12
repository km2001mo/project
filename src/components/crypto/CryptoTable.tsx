import React from 'react';
import { CryptoCurrency } from '../../services/api';

interface CryptoTableProps {
  cryptos: CryptoCurrency[];
  onSelectCrypto: (id: string) => void;
}

export function CryptoTable({ cryptos, onSelectCrypto }: CryptoTableProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-[#1B263B]">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Price</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">24h %</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Market Cap</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Volume</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {cryptos.map((crypto) => (
              <tr 
                key={crypto.id} 
                className="hover:bg-gray-50 cursor-pointer"
                onClick={() => onSelectCrypto(crypto.id)}
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {crypto.name} ({crypto.symbol.toUpperCase()})
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-[#1B263B] font-medium">
                  ${crypto.current_price.toLocaleString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <span className={crypto.price_change_percentage_24h >= 0 ? 'text-green-600' : 'text-red-600'}>
                    {crypto.price_change_percentage_24h.toFixed(2)}%
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  ${(crypto.market_cap / 1e9).toFixed(2)}B
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  ${(crypto.total_volume / 1e9).toFixed(2)}B
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
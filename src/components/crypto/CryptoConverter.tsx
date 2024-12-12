import React, { useState } from 'react';
import { CryptoCurrency } from '../../services/api';

interface CryptoConverterProps {
  cryptos: CryptoCurrency[];
}

export function CryptoConverter({ cryptos }: CryptoConverterProps) {
  const [amount, setAmount] = useState<number>(1);
  const [fromCrypto, setFromCrypto] = useState<string>('bitcoin');
  const [toCrypto, setToCrypto] = useState<string>('ethereum');

  const convert = () => {
    const fromPrice = cryptos.find(c => c.id === fromCrypto)?.current_price || 0;
    const toPrice = cryptos.find(c => c.id === toCrypto)?.current_price || 0;
    return (amount * fromPrice) / toPrice;
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-xl font-semibold text-[#1B263B] mb-4">Crypto Converter</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">From</label>
          <select
            className="w-full border border-gray-300 rounded-md px-3 py-2"
            value={fromCrypto}
            onChange={(e) => setFromCrypto(e.target.value)}
          >
            {cryptos.map((crypto) => (
              <option key={crypto.id} value={crypto.id}>
                {crypto.name} ({crypto.symbol.toUpperCase()})
              </option>
            ))}
          </select>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="mt-2 w-full border border-gray-300 rounded-md px-3 py-2"
            placeholder="Amount"
            min="0"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">To</label>
          <select
            className="w-full border border-gray-300 rounded-md px-3 py-2"
            value={toCrypto}
            onChange={(e) => setToCrypto(e.target.value)}
          >
            {cryptos.map((crypto) => (
              <option key={crypto.id} value={crypto.id}>
                {crypto.name} ({crypto.symbol.toUpperCase()})
              </option>
            ))}
          </select>
          <input
            type="number"
            value={convert().toFixed(8)}
            className="mt-2 w-full border border-gray-300 rounded-md px-3 py-2 bg-gray-50"
            readOnly
          />
        </div>
      </div>
    </div>
  );
}
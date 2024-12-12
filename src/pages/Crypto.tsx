import React from 'react';
import { CryptoChart } from '../components/crypto/CryptoChart';
import { CryptoPriceCard } from '../components/crypto/CryptoPriceCard';
import { CryptoTable } from '../components/crypto/CryptoTable';
import { CryptoConverter } from '../components/crypto/CryptoConverter';
import { useCryptoData } from '../hooks/useCryptoData';

export function Crypto() {
  const { cryptos, loading, error, selectedCrypto, setSelectedCrypto } = useCryptoData();

  const selectedCryptoData = cryptos.find(c => c.id === selectedCrypto);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-lg text-gray-600">Loading cryptocurrency data...</div>
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

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-[#1B263B]">Cryptocurrency Prices</h1>
      
      {selectedCryptoData && <CryptoChart crypto={selectedCryptoData} />}

      <div className="bg-[#1B263B] rounded-lg shadow-lg p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {cryptos.slice(0, 8).map((crypto) => (
            <CryptoPriceCard
              key={crypto.id}
              crypto={crypto}
              onClick={() => setSelectedCrypto(crypto.id)}
            />
          ))}
        </div>
      </div>

      <CryptoConverter cryptos={cryptos} />
      
      <CryptoTable 
        cryptos={cryptos}
        onSelectCrypto={setSelectedCrypto}
      />
    </div>
  );
}
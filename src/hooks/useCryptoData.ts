import { useState, useEffect } from 'react';
import { api, CryptoCurrency } from '../services/api';

export function useCryptoData() {
  const [cryptos, setCryptos] = useState<CryptoCurrency[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCrypto, setSelectedCrypto] = useState<string>('bitcoin');

  useEffect(() => {
    const fetchCryptos = async () => {
      try {
        setLoading(true);
        const data = await api.getCryptoPrices();
        setCryptos(data);
        setError(null);
      } catch (err) {
        setError('Failed to fetch cryptocurrency data');
        console.error('Error in useCryptoData:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchCryptos();
    const interval = setInterval(fetchCryptos, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  return {
    cryptos,
    loading,
    error,
    selectedCrypto,
    setSelectedCrypto
  };
}
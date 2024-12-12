import { useState, useEffect } from 'react';
import { api, ExchangeRate } from '../services/api';

export function useCurrencyConverter() {
  const [rates, setRates] = useState<ExchangeRate[]>([]);
  const [amount, setAmount] = useState<number>(1);
  const [fromCurrency, setFromCurrency] = useState<string>('USD');
  const [toCurrency, setToCurrency] = useState<string>('EUR');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const data = await api.getExchangeRates();
        setRates(data);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch rates:', error);
        setLoading(false);
      }
    };

    // Initial fetch
    fetchRates();

    // Fetch rates every 10 seconds for real-time updates
    const intervalId = setInterval(fetchRates, 10000); // 10000 ms = 10 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const convert = (amount: number, from: string, to: string): number => {
    const fromRate = rates.find(r => r.code === from)?.rate || 1;
    const toRate = rates.find(r => r.code === to)?.rate || 1;
    return (amount / fromRate) * toRate;
  };

  return {
    rates,
    amount,
    setAmount,
    fromCurrency,
    setFromCurrency,
    toCurrency,
    setToCurrency,
    convert,
    loading
  };
}

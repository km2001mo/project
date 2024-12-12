import { useState, useEffect } from 'react';
import { currencyApi, ExchangeRate } from '../services/currencyApi';

export function useExchangeRates() {
  const [rates, setRates] = useState<ExchangeRate[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRates = async () => {
      try {
        setLoading(true);
        const data = await currencyApi.getExchangeRates();
        setRates(data);
        setError(null);
      } catch (err) {
        setError('Failed to fetch exchange rates');
        console.error('Error fetching exchange rates:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchRates();
    const interval = setInterval(fetchRates, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  const convert = (amount: number, fromCurrency: string, toCurrency: string): number => {
    const fromRate = rates.find(r => r.code === fromCurrency)?.rate || 1;
    const toRate = rates.find(r => r.code === toCurrency)?.rate || 1;
    return (amount / fromRate) * toRate;
  };

  return { rates, loading, error, convert };
}
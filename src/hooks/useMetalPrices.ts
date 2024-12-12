import { useState, useEffect, useCallback } from 'react';
import { MetalPrice } from '../types/metals';
import { getMetalPrices } from '../services/api/metals';

export function useMetalPrices() {
  const [prices, setPrices] = useState<MetalPrice[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPrices = useCallback(async () => {
    try {
      setLoading(true);
      const data = await getMetalPrices();
      setPrices(data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch metal prices');
      console.error('Error fetching metal prices:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchPrices();
    const interval = setInterval(fetchPrices, 60000);
    return () => clearInterval(interval);
  }, [fetchPrices]);

  return { prices, loading, error };
}
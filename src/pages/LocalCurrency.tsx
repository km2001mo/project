import React from 'react';
import { PriceChart } from '../components/charts/PriceChart';
import { useExchangeRates } from '../hooks/useExchangeRates';

export function LocalCurrency() {
  const { rates, loading, error, convert } = useExchangeRates();
  const [amount, setAmount] = React.useState<number>(1);
  const [fromCurrency, setFromCurrency] = React.useState<string>('USD');
  const [toCurrency, setToCurrency] = React.useState<string>('EUR');

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-lg text-gray-600">Loading exchange rates...</div>
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

  const convertedAmount = convert(amount, fromCurrency, toCurrency);

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-[#1B263B]">Local Currency Exchange Rates</h1>
      
      <div className="bg-[#1B263B] rounded-lg shadow-lg p-6">
        <h2 className="text-white text-xl font-bold mb-4">Exchange Rate Chart</h2>
        <PriceChart 
          data={rates.map(rate => ({
            name: rate.code,
            value: rate.rate
          }))} 
          color="#FFD700" 
        />
      </div>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-[#1B263B]">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Currency</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Code</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Rate</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Last Updated</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {rates.map((rate) => (
                <tr key={rate.code} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{rate.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{rate.code}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{rate.rate.toFixed(4)}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(rate.last_updated).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-semibold text-[#1B263B] mb-4">Currency Calculator</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">From</label>
            <select 
              className="w-full border border-gray-300 rounded-md px-3 py-2"
              value={fromCurrency}
              onChange={(e) => setFromCurrency(e.target.value)}
            >
              {rates.map((rate) => (
                <option key={rate.code} value={rate.code}>
                  {rate.code} - {rate.name}
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
              value={toCurrency}
              onChange={(e) => setToCurrency(e.target.value)}
            >
              {rates.map((rate) => (
                <option key={rate.code} value={rate.code}>
                  {rate.code} - {rate.name}
                </option>
              ))}
            </select>
            <input
              type="number"
              value={convertedAmount.toFixed(2)}
              className="mt-2 w-full border border-gray-300 rounded-md px-3 py-2 bg-gray-50"
              readOnly
            />
          </div>
        </div>
      </div>
    </div>
  );
}
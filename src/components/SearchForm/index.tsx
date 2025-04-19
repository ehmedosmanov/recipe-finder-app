'use client';
import { cuisines } from '@/data/cuices';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const SearchForm = () => {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [cuisine, setCuisine] = useState('');
  const [maxReadyTime, setMaxReadyTime] = useState<number | undefined>(
    undefined
  );
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    setIsFormValid(!!query || !!cuisine || !!maxReadyTime);
  }, [query, cuisine, maxReadyTime]);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const params = new URLSearchParams();
    if (query) params.append('query', query);
    if (cuisine) params.append('cuisine', cuisine);
    if (maxReadyTime) params.append('maxReadyTime', maxReadyTime.toString());

    router.push(`/recipes?${params.toString()}`);
  };

  return (
    <>
      <form onSubmit={handleFormSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="query"
            className="block text-sm font-medium text-gray-700 mb-1">
            Recipe query
          </label>
          <input
            id="query"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="e.g., pasta"
            className="w-full px-3 py-2 border border-gray-300 rounded-md s focus:outline-none focus:ring-orange-500 focus:border-orange-500"
          />
        </div>

        <div>
          <label
            htmlFor="cuisine"
            className="block text-sm font-medium text-gray-700 mb-1">
            Cuisine
          </label>
          <select
            id="cuisine"
            value={cuisine}
            onChange={(e) => setCuisine(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md  focus:outline-none focus:ring-orange-500 focus:border-orange-500">
            <option value="">Select a cuisine (optional)</option>
            {cuisines.map((c) => (
              <option key={c} value={c.toLowerCase()}>
                {c}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="maxReadyTime"
            className="block text-sm font-medium text-gray-700 mb-1">
            Maximum preparation time (minutes)
          </label>
          <input
            id="maxReadyTime"
            type="number"
            min="1"
            value={maxReadyTime || ''}
            onChange={(e) =>
              setMaxReadyTime(
                e.target.value ? Number.parseInt(e.target.value) : undefined
              )
            }
            placeholder="e.g., 30"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500"
          />
        </div>

        <button
          type="submit"
          disabled={!isFormValid}
          className={`w-full cursor-pointer flex items-center justify-center py-2 px-4 border border-transparent rounded-md text-sm font-medium text-white ${
            isFormValid
              ? 'bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500'
              : 'bg-gray-300 cursor-not-allowed'
          }`}>
          Next
        </button>
      </form>
    </>
  );
};

export default SearchForm;

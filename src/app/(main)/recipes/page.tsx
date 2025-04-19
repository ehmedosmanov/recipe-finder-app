import { Suspense } from 'react';
import type { Metadata } from 'next';
import RecipeList from '@/components/RecipeList';
import Loading from './loading';

export const metadata: Metadata = {
  title: 'Recipes',
};

type SearchParams = {
  searchParams: {
    query?: string;
    cuisine?: string;
    maxReadyTime?: string;
  };
};

const Recipes = ({ searchParams }: SearchParams) => {
  return (
    <div className="p-4 md:p-8 bg-gradient-to-b from-amber-50 to-orange-50">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl md:text-3xl mb-6 font-bold text-gray-800 ">
          Recipe Results
        </h1>

        <Suspense fallback={<Loading />}>
          <RecipeList searchParams={searchParams} />
        </Suspense>
      </div>
    </div>
  );
};

export default Recipes;

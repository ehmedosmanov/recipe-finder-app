import React, { Suspense } from 'react';
import Loading from './loading';
import RecipeSingle from '@/components/RecipeSingle';

type Params = Promise<{ id: string }>;

const RecipeDetail = async (props: { params: Params }) => {
  const params = await props.params;
  return (
    <div className="p-4 md:p-8 bg-gradient-to-b from-amber-50 to-orange-50">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6 flex items-center"></div>

        <Suspense fallback={<Loading />}>
          <RecipeSingle id={params.id} />
        </Suspense>
      </div>
    </div>
  );
};

export default RecipeDetail;

import React from 'react';

const RecipeSkeletonLoading = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].fill('').map((_, i) => (
          <div
            key={i}
            className="bg-white rounded-lg overflow-hidden shadow-md">
            <div className="h-48 bg-gray-200 animate-pulse" />
            <div className="p-4">
              <div className="h-6 bg-gray-200 rounded animate-pulse mb-2" />
              <div className="h-4 bg-gray-200 rounded animate-pulse w-1/3" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default RecipeSkeletonLoading;

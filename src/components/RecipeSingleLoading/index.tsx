const RecipeSingleLoading = () => {
  return (
    <>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="h-64 sm:h-80 bg-gray-200 animate-pulse" />

        <div className="p-6">
          <div className="h-8 bg-gray-200 rounded animate-pulse mb-4 w-3/4" />

          <div className="flex flex-wrap gap-4 mb-6">
            <div className="h-6 bg-gray-200 rounded animate-pulse w-24" />
            <div className="h-6 bg-gray-200 rounded animate-pulse w-24" />
            <div className="h-6 bg-gray-200 rounded animate-pulse w-32" />
          </div>

          <div className="mb-6">
            <div className="h-6 bg-gray-200 rounded animate-pulse mb-3 w-32" />
            <div className="h-4 bg-gray-200 rounded animate-pulse mb-2 w-full" />
            <div className="h-4 bg-gray-200 rounded animate-pulse mb-2 w-full" />
            <div className="h-4 bg-gray-200 rounded animate-pulse mb-2 w-3/4" />
          </div>

          <div className="mb-6">
            <div className="h-6 bg-gray-200 rounded animate-pulse mb-3 w-32" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {[...Array(8)].fill('').map((_, i) => (
                <div
                  key={i}
                  className="h-4 bg-gray-200 rounded animate-pulse"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecipeSingleLoading;

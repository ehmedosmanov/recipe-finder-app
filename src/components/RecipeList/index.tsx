import { getAllRecipes } from '@/api';
import RecipeCard from '../RecipeCard';

const RecipeList = async ({
  searchParams,
}: {
  searchParams: { query?: string; cuisine?: string; maxReadyTime?: string };
}) => {
  const data = await getAllRecipes(searchParams);
  const recipes = data?.results;
  console.log(recipes);

  if (!recipes || recipes?.length === 0) {
    return (
      <div className="min-h-screen flex  items-center justify-center py-12">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          Recipes not found
        </h2>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} {...recipe} />
      ))}
    </div>
  );
};

export default RecipeList;

import { getRecipeById } from '@/api';
import Image from 'next/image';

const RecipeSingle = async ({ id }: { id: string }) => {
  const recipe = await getRecipeById(id);

  console.log(recipe);

  if (!recipe) {
    return (
      <div className="text-center py-12">
        <div className="bg-white rounded-lg p-8">
          <h4 className="text-xl font-semibold text-gray-800 mb-2">
            Recipe not found
          </h4>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white ">
      <div className="relative h-64 sm:h-80">
        <Image
          src={recipe.image}
          alt={recipe.title}
          fill
          className="object-cover w-full h-full"
          priority
        />
      </div>

      <div className="p-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
          {recipe.title}
        </h1>

        <div className="flex gap-4 mb-6">
          {recipe.readyInMinutes && (
            <div className="flex items-center text-gray-700">
              <span>{recipe.readyInMinutes} minutes</span>
            </div>
          )}

          {recipe.servings && (
            <div className="flex items-center text-gray-700">
              <span>{recipe.servings} servings</span>
            </div>
          )}

          {recipe.healthScore && (
            <div className="flex items-center text-gray-700">
              <span>Health score: {recipe.healthScore}</span>
            </div>
          )}
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            Ingredients
          </h2>
          <ul className="flex flex-col gap-2">
            {recipe.extendedIngredients?.map((ingredient, index) => (
              <li key={index} className="flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-orange-500 mt-2 mr-2"></span>
                <span className="text-gray-700">{ingredient.original}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RecipeSingle;

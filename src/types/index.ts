export type BaseResponseType<T> = {
  results: T;
  offset: number;
  number: number;
  totalResults: number;
};

export type Recipe = {
  id: number;
  title: string;
  image: string;
  imageType: string;
  readyInMinutes?: number;
  servings?: number;
  healthScore?: number;
  extendedIngredients?: {
    id: number;
    original: string;
    amount: number;
    unit: string;
  }[];
};

export type GetAllRecipeResponse = BaseResponseType<Recipe[]>;

export type RecipeDetailResponse = Recipe;

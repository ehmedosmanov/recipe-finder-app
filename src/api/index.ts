import { GetAllRecipeResponse, RecipeDetailResponse } from './../types/index';
const API_KEY = process.env.API_KEY;
const BASE_URL = process.env.BASE_API_URL;

type GetAllRecipesParams = {
  query?: string;
  cuisine?: string;
  maxReadyTime?: string;
};

export const getAllRecipes = async (
  params: GetAllRecipesParams
): Promise<GetAllRecipeResponse | undefined> => {
  try {
    const searchParams = new URLSearchParams();
    if (params.query) searchParams.append('query', params.query);
    if (params.cuisine) searchParams.append('cuisine', params.cuisine);
    if (params.maxReadyTime)
      searchParams.append('maxReadyTime', params.maxReadyTime);

    searchParams.append('apiKey', API_KEY as string);

    const response = await fetch(
      `${BASE_URL}/recipes/complexSearch?${searchParams.toString()}`,
      {
        next: { revalidate: 60 },
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    if (!response.ok) throw new Error(`${response.status}`);

    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getRecipeById = async (
  id: string
): Promise<RecipeDetailResponse | undefined> => {
  try {
    const response = await fetch(
      `${BASE_URL}/recipes/${id}/information?apiKey=${API_KEY}`,
      {
        next: { revalidate: 60 },
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }
    const data = (await response.json()) as RecipeDetailResponse;
    return data;
  } catch (error) {
    console.log(error);
  }
};

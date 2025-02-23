import { useState, useEffect } from 'react';
import { getRecipes } from '../api';
import RecipeCard from './RecipeCard';

function RecipeList() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      const response = await getRecipes();
      setRecipes(response.data);
    };
    fetchRecipes();
  }, []);

  return (
    <div>
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} isFavorite={false} />
      ))}
    </div>
  );
}

export default RecipeList;

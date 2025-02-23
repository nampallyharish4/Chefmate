import React from 'react';
import { addFavorite, removeFavorite } from '../api';

function RecipeCard({ recipe, isFavorite }) {
  const handleFavorite = () => {
    if (isFavorite) {
      removeFavorite(recipe.id);
    } else {
      addFavorite(recipe.id);
    }
  };

  return (
    <div>
      <h3>{recipe.title}</h3>
      <p>{recipe.description}</p>
      <button onClick={handleFavorite}>{isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}</button>
    </div>
  );
}

export default RecipeCard;

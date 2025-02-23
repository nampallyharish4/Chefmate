import { useState, useEffect } from 'react';
import { getUserProfile } from '../api';

function ProfilePage() {
  const [user, setUser] = useState({});
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchUserProfile = async () => {
      const response = await getUserProfile();
      setUser(response.data.user);
      setFavorites(response.data.favorites);
    };
    fetchUserProfile();
  }, []);

  return (
    <div>
      <h2>{user.username}'s Profile</h2>
      <h3>Favorite Recipes</h3>
      <ul>
        {favorites.map((recipe) => (
          <li key={recipe.id}>{recipe.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProfilePage;

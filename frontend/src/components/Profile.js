import { useState, useEffect } from 'react';
import axios from 'axios';

function Profile() {
  const [user, setUser] = useState({});
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchProfile = async () => {
      const response = await axios.get('/api/user-profile');
      setUser(response.data.user);
      setFavorites(response.data.favorites);
    };
    fetchProfile();
  }, []);

  return (
    <div>
      <h2>{user.username}'s Profile</h2>
      <h3>Favorites</h3>
      <ul>
        {favorites.map((recipe) => (
          <li key={recipe.id}>{recipe.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Profile;

import React, { useEffect, useState } from 'react';
import './ css/Favorites.css';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('authToken');

    fetch('http://localhost:3001/favorites', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .then(response => response.json())
      .then(data => setFavorites(data))
      .catch(error => console.error('Error fetching favorites:', error));
  }, []);

  return (
    <div className="favorites">
      <h2>Favorites</h2>
      {favorites.map((plant) => (
        <div key={plant.id} className="favorite-item">
          <h3>{plant.name}</h3>
          <p>{plant.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Favorites;

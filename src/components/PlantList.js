import React from 'react';

function PlantList({ plants, addToCart, addToFavorites }) {
  return (
    <div>
      <h1>Plant List</h1>
      <ul>
        {plants.map(plant => (
          <li key={plant.id}>
            {plant.name}
            <button onClick={() => addToCart(plant.id)}>Add to Cart</button>
            <button onClick={() => addToFavorites(plant.id)}>Add to Favorites</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PlantList;

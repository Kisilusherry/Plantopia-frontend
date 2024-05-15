// src/components/Home.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Home() {
  const [region, setRegion] = useState('');
  const [plants, setPlants] = useState([]);

  const handleRegionSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`/api/plants?region=${region}`);
      setPlants(response.data.plants);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Welcome to Plant Selling App</h2>
      <form onSubmit={handleRegionSubmit}>
        <input
          type="text"
          placeholder="Enter your region"
          value={region}
          onChange={(e) => setRegion(e.target.value)}
          required
        />
        <button type="submit">Get Plants</button>
      </form>
      <div>
        {plants.map((plant) => (
          <div key={plant.id}>
            <Link to={`/plant/${plant.id}`}>
              <h3>{plant.name}</h3>
            </Link>
            <p>{plant.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;

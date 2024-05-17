import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './css/Home.css';

const Home = () => {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/plants')
      .then(response => response.json())
      .then(data => setPlants(data))
      .catch(error => console.error('Error fetching plants:', error));
  }, []);

  return (
    <div className="plant-list">
      {plants.map(plant => (
        <div key={plant.id} className="card">
          <img src={plant.image_url} alt={plant.name} />
          <div className="card-content">
            <h3 className="card-title">{plant.name}</h3>
            <p className="card-description">{plant.description}</p>
            <p className="card-price">${plant.price}</p>
            <Link to={`/plant/${plant.id}`}>
              <button>View Details</button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;

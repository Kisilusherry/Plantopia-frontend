import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Home() {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    const fetchPlants = async () => {
      try {
        const response = await axios.get('https://api.perennial.com/plants');
        setPlants(response.data);
      } catch (error) {
        console.error('There was an error fetching the plants!', error);
      }
    };

    fetchPlants();
  }, []);

  return (
    <div>
      <h1>Plant List</h1>
      <ul>
        {plants.map(plant => (
          <li key={plant.id}>
            {plant.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;

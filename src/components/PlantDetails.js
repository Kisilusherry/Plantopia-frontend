import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_KEY = 'sk-HSVc6647565408e5e5543'; // Include the API key directly

function PlantDetail({ match }) {
  const [plant, setPlant] = useState(null);

  useEffect(() => {
    const fetchPlantDetail = async () => {
      try {
        const response = await axios.get(`https://api.perennial.com/plants/${match.params.id}`, {
          headers: {
            'Authorization': `Bearer ${API_KEY}`
          }
        });
        setPlant(response.data);
      } catch (error) {
        console.error('There was an error fetching the plant details!', error);
      }
    };

    fetchPlantDetail();
  }, [match.params.id]);

  if (!plant) return <div>Loading...</div>;

  return (
    <div>
      <h1>{plant.name}</h1>
      <p>{plant.description}</p>
      <p>Price: ${plant.price}</p>
    </div>
  );
}

export default PlantDetail;

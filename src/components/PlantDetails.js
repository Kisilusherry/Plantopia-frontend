import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PlantDetails = ({ match }) => {
  const [plant, setPlant] = useState(null);
  const { id } = match.params;

  useEffect(() => {
    const fetchPlantDetails = async () => {
      try {
        const response = await axios.get(`https://perenual.com/api/plants/${id}`);
        setPlant(response.data);
      } catch (error) {
        console.error('Error fetching plant details:', error);
      }
    };

    fetchPlantDetails();
  }, [id]);

  if (!plant) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{plant.name}</h2>
      <p>Description: {plant.description}</p>
      <p>Price: {plant.price}</p>
      {/* Add additional plant details here */}
    </div>
  );
};

export default PlantDetails;

// src/components/PlantDetails.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function PlantDetails() {
  const { id } = useParams();
  const [plant, setPlant] = useState(null);

  useEffect(() => {
    const fetchPlantDetails = async () => {
      try {
        const response = await axios.get(`/api/plants/${id}`);
        setPlant(response.data.plant);
      } catch (error) {
        console.error(error);
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
      <p>{plant.description}</p>
      <p>{plant.price}</p>
    </div>
  );
}

export default PlantDetails;

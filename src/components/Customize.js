import React, { useState } from 'react';
import axios from 'axios';

const API_KEY = 'sk-HSVc6647565408e5e5543';

function Customize({ setCustomizedPlants }) {
  const [preferences, setPreferences] = useState({
    sunlight: '',
    water: '',
    maintenance: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPreferences({
      ...preferences,
      [name]: value
    });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post('https://api.perennial.com/customize', preferences, {
        headers: {
          'Authorization': `Bearer ${API_KEY}`
        }
      });
      setCustomizedPlants(response.data);
    } catch (error) {
      console.error('There was an error customizing the plants!', error);
    }
  };

  return (
    <div>
      <h1>Customize Your Plants</h1>
      <label>
        Sunlight:
        <input type="text" name="sunlight" value={preferences.sunlight} onChange={handleChange} />
      </label>
      <label>
        Water:
        <input type="text" name="water" value={preferences.water} onChange={handleChange} />
      </label>
      <label>
        Maintenance:
        <input type="text" name="maintenance" value={preferences.maintenance} onChange={handleChange} />
      </label>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Customize;

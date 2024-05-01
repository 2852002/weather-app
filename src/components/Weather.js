// components/Weather.js
import React from 'react';

function Weather({ data }) {
  // Add a check to ensure data exists before accessing its properties
  if (!data) {
    return <p>No weather data available</p>;
  }

  return (
    <div>
      <h2>Weather in {data.name}</h2>
      <p>Temperature: {data.main ? Math.round(data.main.temp - 273.15) : 'N/A'}°C</p>
      <p>Description: {data.weather ? data.weather[0].description : 'N/A'}</p>
    </div>
  );
}

export default Weather;

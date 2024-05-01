// components/Weather.js
import React from 'react';

function Weather({ data }) {
  // Add checks to ensure data and nested properties exist before accessing them
  if (!data || !data.main || !data.weather) {
    return <p>No weather data available</p>;
  }

  return (
    <div>
      <h2>Weather in {data.name}</h2>
      <p>Temperature: {data.main.temp ? Math.round(data.main.temp - 273.15) : 'N/A'}°C</p>
      <p>Description: {data.weather[0].description ? data.weather[0].description : 'N/A'}</p>
    </div>
  );
}

export default Weather;

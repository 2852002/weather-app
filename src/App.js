// App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import Weather from './components/Weather';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const API_KEY = '7c7236884dd110cc2ec9ed9aa5da6001';
  const CITY = 'TamilNadu'; // You can change the city here

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}`)
      .then(response => response.json())
      .then(data => {
        setWeatherData(data);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
      </header>
      <main>
        {weatherData ? <Weather data={weatherData} /> : <p>Loading...</p>}
      </main>
    </div>
  );
}

export default App;

// App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import Weather from './components/Weather';

function App() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const API_KEY = '7c7236884dd110cc2ec9ed9aa5da6001';


  const fetchWeatherData = () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
      .then(response => response.json())
      .then(data => {
        setWeatherData(data);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  };

  useEffect(() => {
    if (city) {
      fetchWeatherData();
    }
  }, [city]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </header>
      <main>
        {weatherData ? <Weather data={weatherData} /> : <p>Enter a city name to see the weather</p>}
      </main>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import { fetchWeather } from './services/weatherAPI';

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = async (city) => {
    try {
      setError('');
      const data = await fetchWeather(city);
      setWeatherData(data);
    } catch {
      setError('City not found. Please try again.');
    }
  };

  return (
    <div>
      <h1>Weather App</h1>
      <SearchBar onSearch={handleSearch} />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <WeatherCard data={weatherData} />
    </div>
  );
};

export default App;

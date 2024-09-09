import React, { useState, useEffect } from 'react';
import logo from '../assets/sun_icon.png';
import WeatherCards from './WeatherCards';
import Timeline from './Timeline';

// using openweather free api
const api = {
  key: 'fe53add2826a4f9ec3699d527ec9060c',
  base: 'https://api.openweathermap.org/data/2.5',
};

function MainWeather() {
  const [search, setSearch] = useState('');
  const [weather, setWeather] = useState({});
  const [forecast, setForecast] = useState([]);

  // placeholder forecast for the weathercards. will later implement to update based on api data
  const sampleForecast = [
    { day: 'Mon', temp: 72, weatherType: 'Sunny', logo },
    { day: 'Tue', temp: 68, weatherType: 'Cloudy', logo },
    { day: 'Wed', temp: 75, weatherType: 'Sunny', logo },
    { day: 'Thu', temp: 71, weatherType: 'Rainy', logo },
    { day: 'Fri', temp: 69, weatherType: 'Cloudy', logo },
  ];

  useEffect(() => {
    setForecast(sampleForecast); // set to sample forecast array for the time being!
  }, []);

  // Function to fetch weather data
  const fetchWeather = async (city) => {
    try {
      const response = await fetch(
        `${api.base}/weather?q=${city}&units=imperial&appid=${api.key}`
      );
      const data = await response.json();
      setWeather(data);
    } catch (error) {
      console.error('Error fetching weather:', error);
    }
  };

  // Handle "Enter" key press to trigger search
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      fetchWeather(search);
    }
  };

  return (
    <>
      {/* displaying city name */}
      <div className="mt-10 flex justify-center items-center text-white drop-shadow-md">
        {weather.name ? `${weather.name}, ${weather.sys?.country}` : 'Philadelphia, PA'}
      </div>

      <div className="text-5xl flex justify-center items-center mt-2 ">
        {weather.main ? `${Math.round(weather.main.temp)}°F` : '70°F'}
      </div>

      {/* spinning weather illustration (set just to sun for the time being, will later change based on weather) */}
      <div className="flex justify-center items-center animate-spin-slow">
        <a className="flex flex-shrink-0 items-center mt-2 mb-1 brightness-200">
          <img className="h-20 w-auto"
            src={logo} />
        </a>
      </div>
      
      <div className="flex justify-center items-center mt-1">
        {weather.weather ? weather.weather[0].main : 'Sunny'}
      </div>

      <div className="flex justify-center items-center">
        {/* interactable search box */}
          <input
            type="text"
            placeholder="Enter new city"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex justify-center items-center w-50 p-4 border-2 border-gray-300 rounded-full text-sm mt-2 h-11"
          />
      </div>

      <WeatherCards forecast={forecast} /> {/* pass the forecast array */}

      {/* Timeline, placeholder */}
      <Timeline />

      {/* Details section */}
      <div className="flex justify-center items-center text-">
        <div className="flex-col w-[270px] h-[120px] mt-3" >
          <div className="flex grid grid-cols-2">
            <p className="ml-2 text-white drop-shadow-sm">sunrise: 6:38 AM</p>
            <p className="ml-2 text-white drop-shadow-sm">sunset: 7:18 PM</p>
          </div>
         <div className="flex-col w-[260px] h-[120px]" >
          <div className="flex grid grid-cols-2">
            <p className="ml-2 text-white drop-shadow-sm">humidity: 38%</p>
            <p className="ml-2 text-white drop-shadow-sm">feels like: 70°F</p>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainWeather;

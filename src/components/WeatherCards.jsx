import React from 'react'
import Card from './Card'

const WeatherCards = ({ forecast }) => {
  return (
    <div className="flex justify-center items-center ml-4 mr-4 mt-3 w-[260px]">
        {/* scrollable cards */}
      <div className="flex overflow-x-auto space-x-2">
        {forecast.map((dayData, index) => (
          <div key={index} className="relative">
            <Card
              day={dayData.day}
              temp={dayData.temp}
              weatherType={dayData.weatherType}
              logo={dayData.logo}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherCards;

import React from 'react'

const Card = ({ day, temp, weatherType, logo }) => {
    return (
      <div className="w-[80px] h-[120px] bg-white bg-opacity-80 rounded-lg shadow-md p-2 -ml-8 first:ml-0">
        <div className="text-xs font-bold text-center">{day}</div>
        <div className="text-center text-xl font-semibold">{temp}°F</div>
        <div className="flex justify-center items-center mt-1">
          <img className="h-6 w-6" src={logo} alt={weatherType} />
        </div>
        <div className="text-xs text-center mt-1">{weatherType}</div>
      </div>
    );
  };

export default Card
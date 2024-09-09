import React from 'react'

// mock placeholder timeline, will replace with timeline that updates according to real weather api data

const timelineData = [
  { time: '12AM', logo: '🌙', weatherType: 'Clear' },
  { time: '5AM', logo: '🌧', weatherType: 'Rainy' },
  { time: '10AM', logo: '☁️', weatherType: 'Cloudy' },
  { time: '3PM', logo: '🌞', weatherType: 'Sunny' },
  { time: '8PM', logo: '🌙', weatherType: 'Clear' },
];

const Timeline = () => {
  return (
    <div className="flex justify-center items-center flex-col mt-3 w-[260px] h-[70px] ml-4 bg-white bg-opacity-15 p-8 rounded-lg">
      {/* Timeline Bar */}
      <div className="relative flex items-center justify-between w-[240px] h-[2px] bg-white mt-2  z-0">
        {timelineData.map((data, index) => (
          <div key={index} className="relative text-center z-10">
            {/* Weather Logo */}
            <div className="text-xl mb-3">{data.logo}</div>
            {/* Time */}
            <div className="text-xs mb-3 text-white">{data.time}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;

// src/components/PhoneContainer.jsx

import MainWeather from "./MainWeather";

const PhoneContainer = () => {
    return (
      // general background
      <div className="flex justify-center items-center min-h-screen bg-white-100">
        {/* phone shape */}
        <div className="w-[300px] h-[600px] rounded-[40px] border-4 border-gray-400 shadow-xl relative overflow-hidden bg-center bg-gradient-to-r from-customYellow to-customRed">
          <div className="absolute top-2 left-[50%] transform -translate-x-[50%] w-20 h-1.5 bg-gray-300 rounded-full"></div>
          {/* currently, most components are nested within mainweather */}
          <MainWeather />
        </div>
      </div>
    );
  };
  
  export default PhoneContainer;
  
import React from "react";

const CityName = ({ cityName, countryCode }) => {
  return (
    <p className="h2 p-2">
      {cityName}, {countryCode}
    </p>
  );
};

export default CityName;

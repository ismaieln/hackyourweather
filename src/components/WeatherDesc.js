import React from "react";

function WeatherDesc({ main, description }) {
  return (
    <div className="p-2">
      <p className="h4">{main}</p>
      <p>{description}</p>
    </div>
  );
}

export default WeatherDesc;

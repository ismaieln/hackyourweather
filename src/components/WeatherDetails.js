import React from "react";

function WeatherDetails({ minTemp, maxTemp, lat, lon }) {
  return (
    <div>
      <div className="p-2">
        <p className="h6">min temp : {minTemp} &#8451;</p>
        <p className="h6">max temp: {maxTemp} &#8451;</p>
        <p className="h6">
          location : {lat}, {lon}
        </p>
      </div>
    </div>
  );
}

export default WeatherDetails;

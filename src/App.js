import React, { useState } from "react";
import CityCard from "./components/CityCard";
import Search from "./components/Search";
import "./App.css";

function App() {
  const [weatherInfo, setWeatherInfo] = useState({});
  const [hasError, setError] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const fetchWeather = async (city) => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`
      );
      if (!res.ok) {
        throw new Error("Oops! The city name is not correct. Please try again");
      }
      const weatherData = await res.json();
      const newWeatherData = {
        key: `${weatherData.id}`,
        cityName: `${weatherData.name}`,
        countryCode: `${weatherData.sys.country}`,
        main: `${weatherData.weather[0].main}`,
        description: `${weatherData.weather[0].description}`,
        maxTemp: `${weatherData.main.temp_max}`,
        minTemp: `${weatherData.main.temp_min}`,
        lat: `${weatherData.coord.lat}`,
        lon: `${weatherData.coord.lon}`,
      };
      setWeatherInfo(newWeatherData);
      setLoading(false);
      setError(false);
    } catch (err) {
      setError(true);
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <h1 className="py-3 text-center">Wether</h1>
        <div className="card-size">
          <Search onSubmit={(city) => fetchWeather(city)} />
          {isLoading && <p>'Loading......'</p>}
          {hasError && <p>"SomeThing went wrong"</p>}
          {JSON.stringify(weatherInfo) !== "{}" && (
            <div key={weatherInfo.key} className="row">
              <CityCard
                cityName={weatherInfo.cityName}
                countryCode={weatherInfo.countryCode}
                main={weatherInfo.main}
                description={weatherInfo.description}
                maxTemp={weatherInfo.maxTemp}
                minTemp={weatherInfo.minTemp}
                lat={weatherInfo.lat}
                lon={weatherInfo.lon}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;

import React, { useState } from "react";

import { fetchWeather } from "./api/fetchWeather";
import "./App.css";

const App = () => {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const search = async (e) => {
    if (e.key === "Enter") {
      const data = await fetchWeather(query);

      setWeather(data);
      setQuery("");
    }
  };

  return (
    <div className="main-container">
      <div>
        <h2 className="introMsg">Welcome to my weather app</h2>
        <h2 className="introMsg">Enter City Name &#8595; &#8595;</h2>
      </div>
      <input type="text" className="search" placeholder="Search ..." value={query} onChange={(e) => setQuery(e.target.value)} onKeyPress={search} />
      {weather.main && (
        <div className="city">
          <h2 className="city-name">
            <span>{weather.name}</span>
            <sup>{weather.sys.country}</sup>
          </h2>
          <div className="city-temp">
            {Math.round(weather.main.temp)}
            <sup>&deg;C</sup>
          </div>
          <div className="info">
            <img className="city-icon" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
            <p>{weather.weather[0].description}</p>
          </div>
        </div>
      )}
      <div>
        Copyright &copy;{" "}
        <a className="introMsg" href="https://www.linkedin.com/in/ibrahimelsaber/">
          Ibrahim Elsaber
        </a>
      </div>
    </div>
  );
};

export default App;

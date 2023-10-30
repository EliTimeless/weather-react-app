import React, { useState } from "react";
import axios from "axios";

import "./App.css";

export default function Weather() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  function displayWeather(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "ffbbbb548b237aed83af9997c794ee44";
    let Url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(Url).then(displayWeather);
  }

  function updateCity(event) {
    event.preventDefault();

    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input type="search" placeholder="Enter a city.." onChange={updateCity} />
      <button type="Submit">Search</button>
    </form>
  );

  if (loaded) {
    return (
      <div>
        <div className="weather-app m-2 p-4">
          {form}
          <div className="row">
            <div className="col-6 m-4 p-4">
              <ul>
                <li>Temperature: {Math.round(weather.temperature)}°C</li>
                <li>Description: {weather.description}</li>
                <li>Humidity: {weather.humidity}%</li>
                <li>Wind: {weather.wind}km/h</li>
                <li>
                  <img src={weather.icon} alt={weather.description} />
                </li>
              </ul>
            </div>
            <div className="col-6 m-4 p-4">{city}</div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="weather-app m-2 p-4">
        {form}
        <div className="row">
          <div className="col-6 m-4 p-4">
            <ul>
              <li>Temperature: {Math.round(weather.temperature)}°C</li>
              <li>Description: {weather.description}</li>
              <li>Humidity: {weather.humidity}%</li>
              <li>Wind: {weather.wind}km/h</li>
              <li>
                <img src={weather.icon} alt={weather.description} />
              </li>
            </ul>
          </div>
          <div className="col-6 m-4 p-4">{city}</div>
        </div>
      </div>
    );
  }
}

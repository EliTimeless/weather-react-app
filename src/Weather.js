import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import ReactAnimatedWeather from "react-animated-weather";
import Forecast from "./Forecast";

import "./Weather.css";

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
      city: response.data.name,
    });
    console.log(response.data);
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

  if (loaded === false) {
    return (
      <div className="Weather-app">
        <div className="m-2 p-2">{form}</div>
        <div className="container-sm">
          <div className="row Weather m-2">
            <div className="col-6">
              <h1>{weather.city}</h1>
              <h4> 8:33 4th November 2023 </h4>
              <h4>Temperature: {Math.round(weather.temperature)}°C</h4>
              <ReactAnimatedWeather
                icon={"CLEAR_DAY"}
                color={"black"}
                size={40}
                animate={true}
              />
            </div>
            <div className="col-6">
              <ul>
                <li>Description: {weather.description}</li>
                <li>Humidity: {weather.humidity}%</li>
                <li>Wind: {weather.wind}km/h</li>
              </ul>
            </div>
          </div>
        </div>
        <Forecast />
      </div>
    );
  } else {
    return (
      <div className="Weather-app">
        <div>{form}</div>
        <div className="container-sm">
          <div className="row Weather m-2">
            <div className="col-6">
              <h1>{weather.city}</h1>
              <h4> 8:33 4th November 2023 </h4>
              <h4>Temperature: {Math.round(weather.temperature)}°C</h4>
              <ReactAnimatedWeather
                icon={"CLEAR_DAY"}
                color={"goldenrod"}
                size={40}
                animate={true}
              />
            </div>
            <div className="col-6">
              <ul>
                <li>Humidity: {weather.humidity}%</li>
                <li>Wind: {weather.wind}km/h</li>
                <li>Description: {weather.description}</li>
                <li>
                  <img src={weather.icon} alt={weather.description} />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Forecast />
      </div>
    );
  }
}

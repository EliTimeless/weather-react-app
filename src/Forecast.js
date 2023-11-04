import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import ReactAnimatedWeather from "react-animated-weather";

export default function Forecast() {
  return (
    <div className="container-sm">
      <div className="row">
        <div className="col-sm m-1">
          Mon <div>12/5°C</div> <div>5 km/h</div>
          <ReactAnimatedWeather
            icon={"PARTLY_CLOUDY_DAY"}
            color={"black"}
            size={30}
            animate={true}
          />
        </div>

        <div className="col-sm m-1">
          Tue <div>15/8°C</div> <div>5 km/h</div>
          <ReactAnimatedWeather
            icon={"PARTLY_CLOUDY_DAY"}
            color={"black"}
            size={30}
            animate={true}
          />
        </div>

        <div className="col-sm m-1">
          Wed <div>14/7°C</div>
          <div>5 km/h</div>
          <ReactAnimatedWeather
            icon={"RAIN"}
            color={"black"}
            size={30}
            animate={true}
          />
        </div>

        <div className="col-sm m-1">
          Thu <div>14/5°C</div>
          <div>5 km/h</div>
          <ReactAnimatedWeather
            icon={"SLEET"}
            color={"black"}
            size={30}
            animate={true}
          />
        </div>
        <div className="col-sm m-1">
          Fri <div>10/2°C</div>
          <div>5 km/h</div>
          <ReactAnimatedWeather
            icon={"RAIN"}
            color={"black"}
            size={30}
            animate={true}
          />
        </div>
      </div>
    </div>
  );
}

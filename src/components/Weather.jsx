import { useContext, useEffect, useState } from "react";
import { userContext } from "../Context/Context.jsx";
import moment from "moment";
import { Spinner } from "react-bootstrap";
import LinearChartWeather from "./LinearChartWeather.jsx";
import FetchWeekInput from "./FetchWeatherAPI.jsx";

function Weather() {
  const {
    celsius,
    windSpeed,
    humidity,
    clouds,
    location,
    longitude,
    ICAO,
    cityName,
    sunRise,
    setSunRise,
    sunSet,
    setSunSet,
    metarLoading,
  } = useContext(userContext);

  if (metarLoading === true) {
    return (
      <div className="weather">
        <FetchWeekInput />

        <div className="cloudPNG">
          <img
            src="https://www.transparentpng.com/thumb/clouds/AjeEHR-clouds-best-png.png"
            alt="clouds best png @transparentpng.com"
          ></img>
        </div>

        <div className="date-info">{location}</div>
        <div
          style={{
            fontSize: "1.2rem",
            textShadow: ".5px .5px .75px rgb(19, 86, 148)",
          }}
        >
          {moment().format("llll")}
        </div>

        <div className="forecast">
          <div>
            <span className="temperature">{celsius}</span>

            <span
              style={{
                fontSize: "4rem",
                position: "relative",
                bottom: "1.5rem",
              }}
            >
              ℃
            </span>

            <div
              style={{
                fontSize: "1.5rem",
                textShadow: "1px 1px 1.5px rgb(19, 86, 148)",
                marginBottom: '1rem'
              }}
            >
              {clouds}
            </div>

            <div className="iconList">
              <div style={{ fontSize: "1.1rem", fontWeight: "bold" }}>
                🍃 {windSpeed}kph
              </div>
              <div style={{ fontSize: "1.1rem", fontWeight: "bold" }}>
                💦 {humidity}%
              </div>
              <div style={{ fontSize: "1.1rem", fontWeight: "bold" }}>
                🌄 {sunRise}
              </div>
              <div style={{ fontSize: "1.1rem", fontWeight: "bold" }}>
                🌅 {sunSet}
              </div>
            </div>
          </div>

          <div className="chartBox">
            <LinearChartWeather className="chart" />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        {" "}
        LOADING <Spinner animation="border" size="sm" />
        <Spinner animation="border" />
        <Spinner animation="grow" size="sm" />
        <Spinner animation="grow" />
      </div>
    );
  }
}
export default Weather;

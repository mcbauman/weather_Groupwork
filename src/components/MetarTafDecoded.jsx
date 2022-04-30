import { useContext } from "react";
import { userContext } from "../Context/Context.jsx";
import { Spinner } from "react-bootstrap";

function MetarTafDecoded() {
  const {
    celsius,
    setCelsius,
    windSpeed,
    setWindSpeed,
    humidity,
    setHumidity,
    clouds,
    setClouds,
    location,
    setLocation,
    cityName,
    setCityName,
    latitude,
    setLatitude,
    longitude,
    setLongitude,
    raw_text,
    setRaw_text,
    taf,
    setTaf,
    decoded,
    setDecoded,
    loaded,
    setLoaded,
    ICAO,
    setICAO,
    sunRise,
    setSunRise,
    sunSet,
    setSunSet,
    metarResult,
    setMetarResult,
    metarLoading,
    setMetarLoading,
  } = useContext(userContext);

  if (loaded === true && metarLoading === true) {
    console.log("Decoded data", decoded.data);

    return (
      <div style={{ textAlign: "center" }}>
        {/* Map through the object to fix missing Api format or same name objects all the data 

        {location}<hr/>
                {decoded.data?.map(dataPoint=>(
                    <div><h2>DATA</h2>
                    {dataPoint.forecast?.map(forecastPoint=>(
                        <div>
                            <h3>FORECAST</h3>
                            {forecastPoint.change&&<div>{forecastPoint.change.time_becoming}</div>}
                            {forecastPoint.clouds?.map(cloud=>(
                                <div>{cloud.code} {cloud.text}</div>
                            ))}
                            {forecastPoint.conditions?.map(condition=>(
                                <div>{condition.code} {condition.text}</div>
                            ))}
                        </div>
                    ))}
                    </div>
                ))}  */}

        <span style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
          {location}
        </span>
        <hr />

        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
            textAlign: "left",
          }}
        >
          <div className="decoded-left-part" style={{ marginBottom: "3vh" }}>
            <h4>TAF :</h4>
            <strong>From:</strong> {decoded.data[0].forecast[0].timestamp.from}
            <br />
            <strong>To:</strong> {decoded.data[0].forecast[0].timestamp.to}
            <br />
            <strong>Wind:</strong> {decoded.data[0].forecast[0].wind.degrees}° /{" "}
            {decoded.data[0].forecast[0].wind.speed_kph} kph
            <br />
            <strong>Visibility: </strong>{" "}
            {decoded.data[0].forecast[0].visibility.meters} meter
            <br />
            <strong>Clouds:</strong>{" "}
            {decoded.data[0].forecast[0].clouds
              ? decoded.data[0].forecast[0].clouds[0].text
              : "Data not found"}
          </div>

          <div className="decoded-right-part">
            <h4>METAR :</h4>
            <strong>Released:</strong> {metarResult.data[0].observed} <br />
            <strong>Wind: </strong> {metarResult.data[0].wind.degrees}° /{" "}
            {metarResult.data[0].wind.speed_kph} kph <br />
            <strong>Visibilty:</strong> {metarResult.data[0].visibility.meters}{" "}
            meters <br />
            <strong>Clouds:</strong> {metarResult.data[0].clouds[0].text} <br />
            <strong>Temperature:</strong>{" "}
            {metarResult.data[0].temperature.celsius}°C <br />
            <strong>Pressure:</strong> {metarResult.data[0].barometer.hpa} hpa{" "}
            <br />
          </div>
        </div>

        {/* <pre>{JSON.stringify(decoded, 0, " ")}</pre> */}
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
export default MetarTafDecoded;

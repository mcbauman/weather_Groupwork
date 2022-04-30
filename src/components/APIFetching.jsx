import { useEffect } from "react";
import axios from "axios";
import { useContext } from "react";
import { userContext } from "../Context/Context.jsx";
import { Spinner } from "react-bootstrap";


export default function APIFetching(props) {
  const {
    setCelsius,
    setWindSpeed,
    setHumidity,
    setClouds,
    setLocation,
    cityName,
    latitude,
    setLatitude,
    longitude,
    setLongitude,
    setRaw_text,
    setTaf,
    setDecoded,
    setLoaded,
    ICAO,
    setICAO,
    setSunRise,
    setSunSet,
    setMetarResult,
    setMetarLoading,
    archieveData,
    setArchieveData
  } = useContext(userContext);

  const params = {
    access_key: "3759bf50e5fbe59226c42863dfaff27a",
    query: cityName,
  };

  ////////// Fetching API data for Latitude and Longitude

  useEffect(() => {
    axios
      .get("http://api.positionstack.com/v1/forward", { params })
      .then((response) => {
        setLatitude(response.data.data[0].latitude);
        setLongitude(response.data.data[0].longitude)
      })
      .catch((error) => {
        console.log(error);
      });
  }, [cityName]);

  console.log(latitude)

  /////// Fetching API Data for Weather information from (METAR)

  useEffect(() => {
    if(!latitude){return}
    const key = "?x-api-key=8cf71fb165574cd4a17423a33f";
  
      fetch(
      `https://api.checkwx.com/metar/lat/${latitude}/lon/${longitude}/radius/50/decoded`+key)
      .then((response) => response.json())
      .then((result) => {
        setCelsius(result.data[0].temperature.celsius);
        setWindSpeed(result.data[0].wind.speed_kph);
        setHumidity(result.data[0].humidity.percent);
        setClouds(result.data[0].clouds[0].text);
        setLocation(result.data[0].station.location);
        setRaw_text(result.data[0].raw_text);
        setICAO(result.data[0].icao);
        setMetarResult(result)
        setMetarLoading(true)
        setArchieveData([...archieveData,result.data[0].station.location,result.data[0].raw_text])
        localStorage.setItem("archieveData",JSON.stringify(archieveData))
      })
      .catch((error) => console.error(error)); 
    },[longitude]);

  //////////// fetching API Data for Forecast from (TAF)

  useEffect(() => {
    if(!latitude){return}

    const key2 = "?x-api-key=8cf71fb165574cd4a17423a33f";
    fetch(
      `https://api.checkwx.com/taf/lat/${latitude}/lon/${longitude}/radius/50/decoded` +
        key2
    )
      .then((response) => response.json())
      .then((result) => {
        setTaf(result.data[0].raw_text);
        setDecoded(result);
        setLoaded(true);
      })
      .catch((error) => console.error(error));
  }, [longitude]);

  // fetching API Data for sunrise and sunset from (STATION)

  useEffect(() => {
    const key2 = "?x-api-key=8cf71fb165574cd4a17423a33f";
    fetch(`https://api.checkwx.com/station/${ICAO}/suntimes` + key2)
      .then((response) => response.json())
      .then((result) => {
        setSunRise(result.data[0].sunrise_sunset.local.sunrise);
        setSunSet(result.data[0].sunrise_sunset.local.sunset);
      })
      .catch((error) => console.error(error));
  }, [ICAO]);

  // writes the METAR into Local storage
//   useEffect(()=>{
//     localStorage.setItem("archieveData",JSON.stringify(archieveData))
//   },[archieveData])
}

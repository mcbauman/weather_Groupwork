import React from 'react'
import { useState } from "react";

export const userContext = React.createContext(null)

export default function UserContextProvider (props) {

    const lastCity=localStorage.getItem("cityName")
    const defaultCity=lastCity?JSON.parse(lastCity):"Berlin"
    
    const lastArchieveData=localStorage.getItem("archieveData")
    const defautlArchieveData=lastArchieveData?JSON.parse(lastArchieveData):[]
    const [archieveData,setArchieveData]=useState(defautlArchieveData)

    const [celsius, setCelsius] = useState([]);
    const [windSpeed, setWindSpeed] = useState([]);
    const [humidity, setHumidity] = useState([]);
    const [clouds, setClouds] = useState([]);
    const [location, setLocation] = useState([]);
    const [cityName, setCityName] = useState(defaultCity);
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");
    const [raw_text,setRaw_text]=useState("")
    const [taf, setTaf]=useState("")
    const [decoded, setDecoded]=useState({})
    const [loaded,setLoaded]=useState(false)
    const [ ICAO, setICAO ] = useState ("EDDB")
    const [ sunRise, setSunRise] = useState([])
    const [ sunSet, setSunSet] = useState([])
    const [ metarResult, setMetarResult ] = useState([])
    const [ metarLoading, setMetarLoading ] = useState(false)
    const [weeklyWeather, setWeeklyWeather] = useState({})
    const [loadedForwardGeoCode, setLoadedForwardGeoCode] = useState(false)
    const [weekForecast, setWeekForecast] = useState([])
    const [emptyArrayForecast,setEmptyArrayForecast ] = useState([])


    //all new state will go up and pass variable and function in the contextValue

    const contextValue = { celsius, setCelsius, windSpeed, setWindSpeed, 
                            humidity, setHumidity, clouds, setClouds, 
                            location, setLocation, cityName, setCityName, 
                            latitude, setLatitude, longitude, setLongitude, 
                            raw_text,setRaw_text, taf, setTaf, decoded, 
                            setDecoded, loaded, setLoaded , ICAO, setICAO, 
                            sunRise, setSunRise, sunSet, setSunSet, metarResult, 
                            metarLoading, setMetarLoading, setMetarResult,
                            archieveData,setArchieveData, weeklyWeather,
                            loadedForwardGeoCode, setLoadedForwardGeoCode,
                            setWeeklyWeather,weekForecast, setWeekForecast,
                            emptyArrayForecast,setEmptyArrayForecast }
    return(
        <userContext.Provider value={contextValue}>
            {props.children }
        </userContext.Provider>
    )
}
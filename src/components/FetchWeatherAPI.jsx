import { useContext, useEffect } from "react";
import { userContext } from "../Context/Context.jsx";




export default function FetchWeekInput(){

    const {longitude, setLongitude, latitude, setLatitude,weeklyWeather, setWeeklyWeather,
            loadedForwardGeoCode, setLoadedForwardGeoCode,dateTomorrow, setDateTomorrow} = useContext(userContext)



            const key = "dc100cf959e39ee316858708630c871b"
            const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&cnt={5}&appid=${key}`       

    

    useEffect(()=>{
       console.log(123)
        if(!longitude){return}

        fetch(url)
         .then(response => response.json())
         .then(data => 
            setWeeklyWeather(data)
           )
         
        console.log(loadedForwardGeoCode)


    },[latitude, longitude])

    if(loadedForwardGeoCode){
        console.log(weeklyWeather)
        console.log(latitude)
       
        // const date = new Date(weeklyWeather.daily[2].dt*1000-(weeklyWeather.timezone_offset*1000))
        // console.log(date)   

       
       
      
    }
    console.log("helle fetchy")
        

    return(
        <div className="FetchWeekInput">
           
        </div>    
    )





}
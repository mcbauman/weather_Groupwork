import { userContext } from "../Context/Context";
import {useContext, useEffect, useState } from "react"


import {
    ResponsiveContainer,
    AreaChart,
    XAxis,
    YAxis,
    Area,
    Tooltip,
    CartesianGrid,

} from "recharts";



export default function LinearChartWeather(){

    const {weeklyWeather,longitude,latitude,setWeaklyWeather,loadedForwardCode} = useContext(userContext)
    const key = "dc100cf959e39ee316858708630c871b"
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&cnt={5}&appid=${key}`



    const weekArray = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

    console.log(weeklyWeather)

        if(!weeklyWeather.daily){return "loading"}
        console.log(weeklyWeather)

        const newItems = weeklyWeather.daily.map(item => item.dt)
        console.log("new items",newItems)


        const weeklyForecast = weeklyWeather.daily.map(item => {
            return{ 
                date: weekArray[new Date(item.dt*1000).getDay()],
                Temp: (item.temp.day - 273.15).toFixed(1)}
    })
    
        console.log("this is weekForecast", weeklyForecast)


    
    

    return(

         <div className="LinearChartWeather">
            <ResponsiveContainer className="graph-container">
                <AreaChart data={weeklyForecast}>
                    <defs>
                        <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="75%" stopColor="#348BBC" stopOpacity={0.9}></stop>
                            <stop offset="50%" stopColor="#348BBC" stopOpacity={0.9}></stop>
                        </linearGradient>
                    </defs>
                    <Area dataKey="Temp" stroke="#2451B7" fill="url(#color)" />

                    <XAxis 
                        dataKey="date" 
                        axisLine={true}
                        tickLine={false}
                        tickCount={10}
                        tickFormatter={str => str }
                        />

                    <YAxis 
                        dataKey="Temp" 
                        axisLine={true} 
                        tickLine={false} 
                        tickCount={8}
                        tickFormatter={number => `C°${number.toFixed()}`}   
                        />
                        

                    <Tooltip />

                    <CartesianGrid opacity={1} vertical={false}/>

                </AreaChart>
            </ResponsiveContainer>

            
        </div>
    )



}
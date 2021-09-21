import React from 'react'

const Weathercard = ({data}) => {
    return (
        <div className='weathercard'>
            <div className='container'>
                <h1>{Math.round(data.main.temp)} °C </h1>
                <p className='minmax'> Temp min : {data.main.temp_min}  °C <br/> Temp max : {data.main.temp_max}  °C </p>
                <h2>{data.name}</h2>
                <h3>Feels like : {data.main.feels_like}  °C ,<span> {data.weather[0].main} , {data.weather[0].description}</span> </h3>
                <h3>Humidity : {data.main.humidity} % </h3>
                <h3>Pressure : {data.main.pressure} hPa</h3>
                <h3>Visibility : {(data.visibility/1000)} km </h3>
                <h3>Wind</h3>
                <p>degree :{data.wind.deg}°"</p>
                <p>Speed : {data.wind.speed} meter/sec</p>
            </div>
        </div>
    )
}

export default Weathercard

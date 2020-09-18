import React from "react"

const Weather = ({ data }) => {
  return (
    <div>
      <h2>Weather in {data.location.name}</h2>
      <p>
        <b>Temperature:</b> {data.current.temperature} C°
      </p>
      <p>
        <img src={data.current.weather_icons[0]} alt="weather icon"></img>
      </p>
      <p>
        <b>wind:</b> {data.current.wind_speed} km/h direction{" "}
        {data.current.wind_dir}
      </p>
    </div>
  )
}

export default Weather

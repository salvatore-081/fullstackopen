import React, { useState, useEffect } from "react"
import axios from "axios"
import Weather from "./Weather.js"

function BigCountry({ country }) {
  const [weatherData, setWeatherData] = useState([])
  const [weatherReady, setWeatherReady] = useState(false)
  const api_key = process.env.REACT_APP_API_KEY

  useEffect(() => {
    axios
      .get(
        "http://api.weatherstack.com/current?access_key=" +
          api_key +
          "&query=" +
          country.capital
      )
      .then(response => {
        setWeatherData(response.data)
        setWeatherReady(true)
      })
  }, [api_key, country.capital])

  return (
    <React.Fragment>
      <h1>{country.name}</h1>
      <p>
        capital {country.capital}
        <br></br>
        population {country.population}
      </p>
      <h2>languages</h2>
      <ul>
        {country.languages.map(l => (
          <li key={l.name}>{l.name}</li>
        ))}
      </ul>
      <img src={country.flag} alt="flag" width="150px"></img>
      {weatherReady ? <Weather data={weatherData} /> : null}
    </React.Fragment>
  )
}

export default BigCountry

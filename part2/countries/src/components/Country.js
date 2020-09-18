import React from "react"
import BigCountry from "./BigCountry"
import OneLineCountry from "./OneLineCountry"

const Country = ({ showResult, countries }) => {
  if (!showResult) {
    return <p>Too many matches, specify another filter</p>
  }

  if (countries.length === 1) {
    return <BigCountry country={countries[0]} />
  }

  return (
    <React.Fragment>
      {countries.map(c => (
        <OneLineCountry key={c.name} country={c} />
      ))}
    </React.Fragment>
  )
}

export default Country

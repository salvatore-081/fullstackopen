import React, { useState } from "react"
import BigCountry from "./BigCountry"

function OneLineCountry({ country }) {
  const [showInfo, setShowInfo] = useState(false)

  const handleClick = () => {
    setShowInfo(!showInfo)
  }

  return (
    <div>
      {country.name}{" "}
      <button type="button" onClick={handleClick}>
        {showInfo ? "Hide" : "Show"}
      </button>
      {showInfo ? <BigCountry country={country} /> : null}
    </div>
  )
}

export default OneLineCountry

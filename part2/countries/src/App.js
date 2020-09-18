import React, { useState, useEffect } from "react"
import axios from "axios"
import Country from "./components/Country"
import Find from "./components/Find"

function App() {
  const [find, setFind] = useState("")
  const [countries, setCountries] = useState([])
  const [countriesToShow, setCountriesToShow] = useState([])
  const [showResult, setShowResult] = useState(false)

  const handleFindChange = event => {
    setFind(event.target.value)

    const filter = countries.filter(c =>
      c.name.toUpperCase().includes(event.target.value.toUpperCase())
    )
    setCountriesToShow(filter)

    if (filter.length <= 10) {
      setShowResult(true)
    } else if (filter.length > 10 || filter.length === 0) {
      setShowResult(false)
    }
  }

  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then(response => {
      setCountries(response.data)
    })
  }, [])

  return (
    <div>
      <Find find={find} handleFindChange={handleFindChange} />
      <Country showResult={showResult} countries={countriesToShow} />
    </div>
  )
}

export default App

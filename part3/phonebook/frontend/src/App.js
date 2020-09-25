import React, { useState, useEffect } from "react"
import PersonForm from "./components/PersonForm"
import Filter from "./components/Filter"
import Person from "./components/Persons"
import personService from "./services/persons"
import Notification from "./components/Notification"
import "./index.css"

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState("")
  const [newNumber, setNewNumber] = useState("")
  const [filter, setFilter] = useState("")
  const [showAll, setShowAll] = useState(true)
  const [message, setMessage] = useState(null)

  useEffect(() => {
    personService.getAll().then(response => setPersons(response))
  }, [])

  const handleFilterChange = e => {
    if (e.target.value === "") {
      setFilter("")
      setShowAll(true)
    } else {
      setFilter(e.target.value)
      setShowAll(false)
    }
  }

  const handleNameChange = e => setNewName(e.target.value)

  const handleNumberChange = e => setNewNumber(e.target.value)

  const addName = event => {
    event.preventDefault()
    const personObj = {
      name: newName,
      number: newNumber
    }

    //if person is already in the db: update the number?
    if (persons.some(e => e.name === personObj.name)) {
      const personFound = persons.find(p => p.name === personObj.name)
      if (
        window.confirm(
          `${personFound.name} is already added to the phonebook, replace the old number with the new one?`
        )
      ) {
        personService
          .updateNumber(personFound.id, personObj)
          .then(returnedPerson => {
            setPersons(
              persons.map(p => (p.id !== personFound.id ? p : returnedPerson))
            )
            setMessage(`${personObj.name} number replaced`)
            setTimeout(() => setMessage(null), 4000)
          })
          .catch(error => {
            setMessage(`Error: ${JSON.stringify(error.response.data)}`)
            setTimeout(() => setMessage(null), 4000)
          })
      }
    } else {
      personService
        .create(personObj)
        .then(response => {
          setPersons(persons.concat(response))
          setMessage(`Added ${personObj.name}`)
          setTimeout(() => setMessage(null), 4000)
        })
        .catch(error => {
          setMessage(`Error: ${JSON.stringify(error.response.data)}`)
          setTimeout(() => setMessage(null), 8000)
        })
    }

    setNewName("")
    setNewNumber("")
  }

  const numberToShow = showAll
    ? persons
    : persons.filter(p =>
        p.name.toUpperCase().includes(filter.toLocaleUpperCase())
      )

  return (
    <div>
      <h1>Phonebook</h1>
      <Notification message={message} />
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      <h2>add a new</h2>
      <PersonForm
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
        addName={addName}
      />
      <h2>Numbers</h2>
      <Person
        numberToShow={numberToShow}
        persons={persons}
        setPersons={setPersons}
      />
    </div>
  )
}

export default App

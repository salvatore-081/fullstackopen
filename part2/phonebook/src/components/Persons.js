import React from "react"
import personService from "../services/persons"

const Person = ({ numberToShow, persons, setPersons }) => {
  const handleClick = person => {
    if (window.confirm(`delete ${person.name}`)) {
      personService.del(person.id)
      setPersons(persons.filter(p => p.id !== person.id))
    }
  }

  return (
    <React.Fragment>
      {numberToShow.map(p => (
        <p key={p.name}>
          {p.name} {p.number}{" "}
          <button type="button" onClick={() => handleClick(p)}>
            delete
          </button>
        </p>
      ))}
    </React.Fragment>
  )
}

export default Person

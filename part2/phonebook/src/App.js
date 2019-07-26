import React, { useState, useEffect } from 'react'
import axios from 'axios'

const PersonForm = ({ name, onNameChange, number, onNumberChange, addPerson }) => {
  return (
    <form onSubmit={addPerson}>
      <h2>add new</h2>
      <div>
        name: <input value={name} onChange={onNameChange} />
      </div>
      <div>
        number: <input value={number} onChange={onNumberChange} />
      </div>

      <div>
        <button type="submit" >add</button>
      </div>
    </form>
  )
}

const FilterForm = ({ filter, onFilterChange }) => {
  return (
    <div>
      filter: <input value={filter} onChange={onFilterChange} />
    </div>

  )
}

const NumberList = ({ persons, filter }) => {

  const personsToShow = persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))

  return (
    <div>
      <h2>Numbers</h2>
      <ul>
        {personsToShow.map((person) => <li key={person.name}>{person.name}  - {person.number}</li>)}
      </ul>

    </div>
  )
}

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setFilter] = useState('')

  const hook = () => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }
  useEffect(hook, [])

  const handleNameChange = (event) => setNewName(event.target.value)
  const handleNumberChange = (event) => setNewNumber(event.target.value)
  const handleFilterChange = (event) => setFilter(event.target.value)
  
  const addPerson = (event) => {
    event.preventDefault()
    console.log('name', newName)
    console.log('persons', persons)

    let nameInPhonebook = false
    persons.forEach((person) => {
      if (person.name === newName) {
        alert(`${newName} is already in the phonebook`)
        setNewName('')
        setNewNumber('')
        nameInPhonebook = true;
        return;
      }
    })

    if (nameInPhonebook) return;

    setPersons(persons.concat({ name: newName, number: newNumber }))
    setNewName('')
    setNewNumber('')
    return true;
  }



  return (
    <div>
      <h1>Phonebook</h1>
      <FilterForm
        filter={newFilter}
        onFilterChange={handleFilterChange}
      />
      <PersonForm
        name={newName} onNameChange={handleNameChange}
        number={newNumber} onNumberChange={handleNumberChange}
        addPerson={addPerson}
      />
      <NumberList persons={persons} filter={newFilter} />
    </div>
  )
}

export default App;
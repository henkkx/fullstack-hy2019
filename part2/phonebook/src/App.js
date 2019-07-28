import React, { useState, useEffect } from 'react'
import personService from './services/persons';
import FilterForm from './components/FilterForm'
import Notification from './components/Notification'
import NumberList from './components/NumberList'
import PersonForm from './components/PersonForm'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setFilter] = useState('')
  const [message, setMessage] = useState(null)

  useEffect(() => {
    personService
      .getAll()
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  const handleNameChange = (event) => setNewName(event.target.value)
  const handleNumberChange = (event) => setNewNumber(event.target.value)
  const handleFilterChange = (event) => setFilter(event.target.value)

  const addPerson = (event) => {
    event.preventDefault()
    const newPerson = { name: newName, number: newNumber }
    const index = persons.findIndex(person => person.name === newName)

    if (index === -1) {
      personService
        .create(newPerson)
        .then(response => {
          setPersons(persons.concat(response.data))
          setMessage({ text: `${newPerson.name} was added to the server`, type: 'success' })
        })
          .catch(error => {
          setMessage({ text: `${newPerson.name} was already added to the server`, type: 'error' })
          setTimeout(() => setMessage(null), 5000)
        })
    } else if (window.confirm(`${newName} is already in the phonebook, update the number?`)) {
      personService
        .update(persons[index].id, newPerson)
        .then(response => { //copy the array, and replace the old personObject at the given index
          setPersons([...persons.slice(0, index), persons[index] = response.data, ...persons.slice(index + 1)])
          setMessage({ text: `${newPerson.name} was updated to the server`, type: 'success' })
        })
          .catch(error => {
          setMessage({ text: `${newPerson.name} was already updated to the server`, type: 'error' })
          setTimeout(() => setMessage(null), 5000)
        })
    }
    setNewName('')
    setNewNumber('')
  }

  const deletePerson = (person) => {
    if (window.confirm(`deleting ${person.name}, are you sure?`)) {
      personService
        .deletePerson(person.id)
        .then(response => {
          setPersons(persons.filter(p => p.id !== person.id))
          setMessage({text:`${person.name} was deleted from the server`, type: 'success'})
        })
        .catch(error => {
          setMessage({ text: `${person.name} was already removed from server`, type: 'error' })
          setTimeout(() => setMessage(null), 5000)
        })
    }
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <Notification message={message} />
      <FilterForm
        filter={newFilter}
        onFilterChange={handleFilterChange}
      />
      <PersonForm
        name={newName} onNameChange={handleNameChange}
        number={newNumber} onNumberChange={handleNumberChange}
        addPerson={addPerson}
      />
      <NumberList persons={persons} filter={newFilter} deletePerson={deletePerson} />
    </div>
  )
}

export default App;
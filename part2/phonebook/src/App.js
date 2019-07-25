import React, { useState } from 'react'

const PersonForm = ({name, onNameChange, addPerson})=>{
  return (
    <form onSubmit={addPerson}>
        <div>
          name: <input value={name} onChange={onNameChange}/>
        </div>
        <div>
          <button type="submit" >add</button>
        </div>
      </form>
  )
}

const Numbers = ({persons})=>{
  return (
    <div>
      <ul>
      {persons.map((person) => <li key={person.name}>{person.name}</li>)}
      </ul>
      
    </div>
  )
}

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  const handleNameChange = (event) => setNewName(event.target.value)

  const addPerson = (event) => {
    event.preventDefault()
    setPersons(persons.concat({name:newName}))
    setNewName('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <PersonForm name={newName} onNameChange={handleNameChange} addPerson={addPerson}/>
      <h2>Numbers</h2>
      <Numbers persons={persons}/>
    </div>
  )
}

export default App;
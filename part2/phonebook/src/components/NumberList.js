import React from 'react'

const NumberList = ({ persons, filter, deletePerson }) => {

    const personsToShow = persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))

    return (
        <div>
            <h2>Numbers</h2>
            <ul>
                {
                    personsToShow.map((person) => {
                        return (
                            <li key={person.name}>
                                {person.name}  - {person.number}
                                <button onClick={() => deletePerson(person)} >delete</button>
                            </li>
                        )
                    })
                }
            </ul>

        </div>
    )
}

export default NumberList
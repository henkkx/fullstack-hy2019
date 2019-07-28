import React from 'react'

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

export default PersonForm
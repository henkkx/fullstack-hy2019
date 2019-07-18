import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Button = ({ handleClick, text }) => {
    return (
        <button onClick={handleClick}>{text}</button>
    )
}

const App = (props) => {
    const [selected, setSelected] = useState(0)
    const [votes, setVotes] = useState(Array(props.anecdotes.length).fill(0))

    /**
     * random int between min (incl.),  max (excl.)
     */
    const getRandomIndex = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const newAnecdote = () => {
        setSelected(getRandomIndex(0, props.anecdotes.length - 1))
    }

    const vote = () => {
        const votesCopy = [...votes]
        votesCopy[selected]++
        setVotes(votesCopy)
    }

    const findMostVotesIndex = () =>{
        return votes.indexOf(Math.max(...votes))
    } 

    return (
        <div>
            <h1>Anecdote of the day</h1>
            <p>{props.anecdotes[selected]}</p>
            <p>has {votes[selected]} votes</p>
            <Button handleClick={() => newAnecdote()} text='next anecdote' />
            <Button handleClick={() => vote()} text='vote' />
            <h1>Anecdote with most votes</h1>
            <p>{props.anecdotes[findMostVotesIndex()]}</p>
            <p>has {votes[findMostVotesIndex()]} votes</p>

        </div>
    )
}

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
    <App anecdotes={anecdotes} />,
    document.getElementById('root')
)
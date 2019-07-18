import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
    return <h1>{props.course}</h1>
}

const Content = ({parts}) => (
    <div>
        {parts.map((part) => {
            return <Part name={part.name} exercises={part.exercises} number={parts.indexOf(part) + 1} key ={part.id} />
        })}

    </div>

)

const Part = ({name, exercises, number}) => {
    return <p>Part {number}: {name} - {exercises} exercises</p>
}

const Total = ({parts}) => {
    
    const total = parts.map((part) => part.exercises).reduce(((sum, part) => sum + part), 0)

    return <p >Total number of exercises: {total} </p>
}


const App = () => {

    const course = {
        name: 'Half Stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10,
                id:1
            },
            {
                name: 'Using props to pass data',
                exercises: 7,
                id:2
            },

            {
                name: 'State of a component',
                exercises: 14,
                id:3
            },


        ]
    }

    return (
        <div>
            <Header course={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
    return <h1>{props.course}</h1>
}

const Content = (props) => (
    <div>
        {props.content.parts.map((part) => {
        return <Part name={part.name} exercises={part.exercises} number={props.content.parts.indexOf(part)+1}/>
        })}
    
    </div>
    
)

const Part = (props) => {
return <div>Part {props.number}: {props.name} - {props.exercises} exercises</div>
}

const Total = (props) => {
    const total = props.exercises.reduce((a, b) => a + b, 0)

    return <p >Total number of exercises: {total} </p>
}


const App = () => {
    const course = 'Half Stack application development'

    const content = {
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10
            },
            {
                name: 'Using props to pass data',
                exercises: 7,
            },

            {
                name: 'State of a component',
                exercises: 14
            },


        ]
    }

    return (
        <div>
            <Header course={course} />
            <Content content={content} />
            <Total exercises={content.parts.map((part) => part.exercises)} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
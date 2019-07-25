import React from 'react'

const Header = ({course}) => <h1>{course}</h1>


const Content = ({ parts }) => (
    <div>
        {parts.map((part) => {
            return <Part name={part.name} exercises={part.exercises} number={parts.indexOf(part) + 1} key={part.id} />
        })}

    </div>
)

const Part = ({ name, exercises, number }) => {
   return <p> Part {number}: {name} - {exercises} exercises</p>
}


const Total = ({ parts }) => {

    const total = parts.map((part) => part.exercises).reduce(((sum, part) => sum + part), 0)

    return <p ><strong>Total number of exercises: {total}</strong> </p>
}


const Course = ({ course }) => {

    return (
        <div>
            <Header course={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>
    )
}

export default Course;
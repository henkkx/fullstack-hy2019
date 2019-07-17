import React, { useState } from 'react'
import ReactDOM from 'react-dom';

import './index.css';

const Header = (props) => {
    return <h1>{props.header}</h1>
}

const Button = ({ handleClick, text }) => {
    return (
        <button onClick={handleClick}>
            {text}
        </button >
    )
}

const Statistic = ({name, value}) => {
    return (
        <tr>
            <td>{name}</td>
            <td>{value}</td>
        </tr>
    )
}

const Statistics = ({ good, neutral, bad }) => {

    if (good === 0 && neutral === 0 && bad === 0) {
        return (
            <div>
                <h1>Statistics</h1>
                <p>No feedback given</p>
            </div> 
        )
    }
    return (
        <div>
            <h1>Statistics</h1>
            <table>
                <tbody>
                    <Statistic name="good" value={good} />
                    <Statistic name="neutral" value={neutral} />
                    <Statistic name="bad" value={bad} />
                    <Statistic name="total" value={good + neutral + bad} />
                    <Statistic name="average" value={(good - bad) / (good + neutral + bad)} />
                    <Statistic name="positive " value={((good / (good + neutral + bad)) * 100) + '%'} />
                </tbody>
            </table>
        </div> 
    )  


}


const App = () => {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    return (
        <div>
            <Header header={'Give feedback'} />
            <Button handleClick={() => (setGood(good + 1))} text='good' />
            <Button handleClick={() => (setNeutral(neutral + 1))} text='neutral' />
            <Button handleClick={() => (setBad(bad + 1))} text='bad' />
            <Statistics good={good} neutral={neutral} bad={bad} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA


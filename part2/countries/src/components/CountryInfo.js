import React from 'react'

const CountryInfo = ({country})=>{
    return (
        <div>
            <p>capital: {country.capital}</p>
            <p>population: {country.population}</p>
            <h2>languages</h2>
            <ul>
                {country.languages.map(lang => <li key={lang.name}>{lang.name}</li>)}
            </ul>
        </div>
    )
}

export default CountryInfo;
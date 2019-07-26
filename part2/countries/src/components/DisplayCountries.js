import React from 'react'
import CountryList from './CountryList';
import CountryDetailedView from './CountryDetailedView';

const DisplayCountries = ({ countries, filter, onClick }) => {

    const toDisplay = countries.filter((country) => {
        return country.name.toLowerCase().includes(filter.toLowerCase())
    })

    if (filter === '') return <p>filter countries by typing into the search box</p>

    if (toDisplay.length > 9) return <p>Too many matches, specify another filter</p>

    if (toDisplay.length === 0) return <p>no matches</p>

    if (toDisplay.length > 1)
        return <CountryList countries={toDisplay} onClick={onClick} />

    // if only 1 country to show
    return <CountryDetailedView country={toDisplay[0]} />

}

export default DisplayCountries;
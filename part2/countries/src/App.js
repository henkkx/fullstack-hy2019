import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DisplayCountries from './components/DisplayCountries';
import CountryFilter from './components/CountryFilter';

const App = () => {
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')

  const countryHook = () => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }

  useEffect(countryHook, [])

  const handleFilterChange = (event) => setFilter(event.target.value)
  const handleDetailsClick = (country) => setFilter(country)

  return (
    <div >
      <CountryFilter filter={filter} onChange={handleFilterChange} />
      <DisplayCountries countries={countries} filter={filter} onClick={handleDetailsClick} />
    </div>
  );
}

export default App;

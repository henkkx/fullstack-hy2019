import React from 'react'
import CountrySimpleView from './CountrySimpleView';

const CountryList = ({ countries, onClick }) => {
    return (
      <div>
        {countries.map((country) =>
          <CountrySimpleView
            key={country.name}
            name={country.name}
            onClick={onClick}
          />)}
      </div>
    )
  }

export default CountryList;
import React from 'react';
import WeatherBuilder from './WeatherBuilder';
import Flag from './Flag';
import CountryInfo from './CountryInfo';


const CountryDetailedView = ({ country }) => {
    return (
        <div>
            <CountryInfo country={country}/>
            <Flag country={country}/>
            <WeatherBuilder capital={country.capital} />
        </div>
    )
}

export default CountryDetailedView;
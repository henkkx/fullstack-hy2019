import React, {useEffect, useState} from 'react'
import axios from 'axios';
import WeatherReport from './WeatherReport';

const WeatherBuilder = ({ capital }) => {
    const [weather, setWeather] = useState('')
  
    const weatherHook = () => {
      axios.get(`http://api.apixu.com/v1/current.json?key=dc64bd9f7ce54362917173721192507&q=${capital}`)
        .then(response => {
          setWeather(response.data)
        })
    }
  
    useEffect(weatherHook, [])
  
    return (
      <div>
        <WeatherReport weather={weather} />
      </div>
    )
  
  }

  export default WeatherBuilder;
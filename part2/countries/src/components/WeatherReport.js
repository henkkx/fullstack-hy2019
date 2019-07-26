import React from 'react';

const WeatherReport = ({ weather }) => {
    if (!weather) return <p>no weather data available</p>

    return (
        <div>
            <h2>Weather</h2>
            <p>Temperature {weather.current.temp_c} °C<br />
                <img src={weather.current.condition.icon} alt={`current weather: ${weather.current.condition.text}`} /></p>
            <p>Wind {weather.current.wind_kph} km/h, direction: {weather.current.wind_dir}  </p>
        </div>
    )
}

export default WeatherReport
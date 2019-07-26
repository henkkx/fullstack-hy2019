import React from 'react';

const Flag = ({country, width=200, height=200}) => {

    return (
        <img 
        src={country.flag} 
        alt={`flag of ${country.name}`} 
        style={{ width: width, height: height, border: '1px solid' }}
        />
    )
}

export default Flag
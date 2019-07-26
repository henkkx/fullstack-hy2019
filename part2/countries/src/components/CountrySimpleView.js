import React from 'react';

const CountrySimpleView = ({ name, onClick }) => {
    return (
      <p>
        {name}
        <button onClick={() => onClick(name)}>show details</button>
      </p>
    )
  }

  export default CountrySimpleView;
  
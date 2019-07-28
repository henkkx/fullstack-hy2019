import React from 'react'

const FilterForm = ({ filter, onFilterChange }) => {
    return (
      <div>
        filter: <input value={filter} onChange={onFilterChange} />
      </div>
    )
  }

export default FilterForm
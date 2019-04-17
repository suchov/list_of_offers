import React from 'react';

const SearchBox = ({searchChange}) => {
  return (
    <div className="pa2">
      <input 
        className="pa3 ba b--grey br3 w25"
        type="search" 
        placeholder="filter by mark, model" 
        onChange={searchChange}
      />
    </div>
  )
}

export default SearchBox;
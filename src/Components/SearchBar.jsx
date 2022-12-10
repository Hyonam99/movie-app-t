import React, {useState, useContext} from 'react'
import { MovieContext } from '../Contexts/PageContexts'

const SearchBar = () => {

const {setSearchValue} = useContext(MovieContext);

  const handleChange = (e) => {
    console.log(e.target.value)
    setSearchValue(e.target.value)
  }

  return (
    <div className="search-bar-holder">
      <label htmlFor="search">Search</label>
      <input type="text" placeholder="search users..." name="search-bar" className="search-bar" id='search-bar-id' onChange={(e) => handleChange(e)} />
    </div>
  )
}

export default SearchBar
import React, { useState } from 'react'
import {FaSearch} from 'react-icons/fa'
import './SearchBar.css'

export const SearchBar = ({setResults}) => {
  const [input, setInput] = useState('')

  const fetchData = async (value) => {
    await fetch('https://jsonplaceholder.typicode.com/users')
        .then( responses => responses.json() )
        .then( json => {
            const results = json.filter( user => {
                return user && user.name && user.name.toLowerCase().includes(value)
            })
            setResults(results)
        })
  }

  const handleChange = (value) => {
    setInput(value)
    fetchData(value)
  }

//   console.log({ input, setInput})

  return (
    <div className='input-wrapper'>
        <FaSearch id='search-icon' />
        <input 
            placeholder='Type to search...' value={input} 
            onChange={(e) => handleChange(e.target.value)}
        />

          
    </div>
  )
}

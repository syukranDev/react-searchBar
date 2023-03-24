import React from 'react'
import './SearchResult.css'

export const SearchResult = ({result}) => {
  return (
    <div className='search-result' onClick={ e => alert(`You clicked on: ${result.name}!\n\nUser Infos:\nName: ${result.name}\nUsername: ${result.username}\nEmail: ${result.email}`)}>{result.name}</div>
  )
}

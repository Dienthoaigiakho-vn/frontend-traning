import React from 'react'
import './index.css'

const SearchForm = () => {
  return (
      <form className='content-searchForm' action="">
        <input className='content-searchInput' type="text" name="" id="" placeholder='Search for city' />
        <button className='content-searchButton'>
          <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 38C30.3888 38 38 30.3888 38 21C38 11.6112 30.3888 4 21 4C11.6112 4 4 11.6112 4 21C4 30.3888 11.6112 38 21 38Z" fill="none" stroke="#333" strokeWidth="4" strokeLinejoin="round" />
            <path d="M26.657 14.3431C25.2093 12.8954 23.2093 12 21.0001 12C18.791 12 16.791 12.8954 15.3433 14.3431" stroke="#333" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M33.2216 33.2217L41.7069 41.707" stroke="#333" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </form>
  )
}

export default SearchForm

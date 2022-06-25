import React from 'react'
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  return (
    <div>
      <FaSearch
        style={{
          fontSize: '14px',
          cursor: 'pointer',
        }}
      />
    </div>
  )
}

export default SearchBar
import React, { useState } from 'react'
import { TextField, Box } from '@mui/material'
import { debounce } from 'lodash'

// SearchBar component for filtering data based on user input
function SearchBar({ setSearch }) {
  const [searchTerm, setSearchTerm] = useState('')

  // Debounce function to delay search action
  const handleSearchChange = debounce((event) => {
    setSearch(event.target.value)
  }, 300)

  // Handler function for input change
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value)
    handleSearchChange(event)
  }

  return (
    <Box
      sx={{
        mb: 4,
        mx: 'auto',
        width: '100%',
        maxWidth: 600,
      }}
    >
      <TextField
        variant='standard'
        label='Search'
        value={searchTerm}
        onChange={handleInputChange}
        fullWidth
      
      />
    </Box>
  )
}

export default SearchBar

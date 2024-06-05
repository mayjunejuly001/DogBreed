import React, { useState } from 'react'
import { Container, Typography,  LinearProgress } from '@mui/material'
import useFetch from './hooks/useFetch'
import DogList from './components/DogList'
import SearchBar from './components/SearchBar'
import { Box } from '@mui/system'
import PetsOutlinedIcon from '@mui/icons-material/PetsOutlined'
function App() {
  const {
    data: dogs, // Fetched data Loading state Error state
    loading,
    error,
  } = useFetch('https://api.thedogapi.com/v1/breeds') // API endpoint for fetching dog breeds
  const [search, setSearch] = useState('')
  // Filter dogs based on search input
  const filteredDogs = dogs.filter((dog) =>
    dog.name.toLowerCase().includes(search.toLowerCase())
  )

  // Display loading spinner if data is still loading
  if (loading) return <LinearProgress />
  // Display error message if there's an error fetching data
  if (error)
    return (
      <Typography variant='h6' color='error'>
        Error fetching data
      </Typography>
    )

  return (
    <Container sx={{ px: 4 }}>
      <Typography variant='h3' gutterBottom align='center'>
        <PetsOutlinedIcon fontSize='large'  /> Dog Breeds
      </Typography>
      <Box sx={{ mb: 4 }}>
        <SearchBar setSearch={setSearch} />
      </Box>
      <DogList dogs={filteredDogs} />{' '}
    </Container>
  )
}

export default App

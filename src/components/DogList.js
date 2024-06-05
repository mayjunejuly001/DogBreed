import React from 'react'
import { Grid, Card, CardMedia, CardContent, Typography } from '@mui/material'

function DogList({ dogs }) {
  return (
    <Grid container spacing={3} alignItems='center' justifyContent='center'>
      {/*Map through the list of dogs */}
      {dogs.map((dog) => (
        <Grid item key={dog.id} xs={12} md={6}>
          <Card
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              width: '100%',
              borderRadius: 4,
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: 3,
              transition: 'transform 0.3s',
              '&:hover': {
                transform: 'scale(1.05)',
              },
              backgroundColor: 'rgba(138, 208, 134, 0.9)',
              color: 'white',
            }}
          >
            {/* Dog image */}
            <CardMedia
              component='img'
              height='180'
              image={dog.image.url}
              alt={dog.name}
              sx={{
                maxWidth: { xs: '100%', sm: 220 },
                objectFit: 'cover',
              }}
            />
            {/* Dog information */}
            <CardContent
              sx={{
                flexGrow: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                p: 2,
              }}
            >
              <Typography variant='h5' component='div' gutterBottom>
                {dog.name}
              </Typography>

              <Typography variant='body2' color='white'>
                {dog.temperament}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}

export default DogList

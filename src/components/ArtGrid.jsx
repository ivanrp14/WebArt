import React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import artData from '../data/artData';
import ArtCard from './ArtCard';

const ArtGrid = ({ searchTerm }) => {
  const filteredArt = artData.filter((art) =>
    art.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container>
      <Grid container spacing={4}>
        {filteredArt.map((art, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <ArtCard art={art} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ArtGrid;

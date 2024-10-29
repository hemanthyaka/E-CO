// LandingPage.js
import React from 'react';
import { Container } from '@mui/material';
import HeroSlider from './HeroSlider';
import Categories from './Categories';
// import FeaturedProducts from './FeaturedProducts';

const LandingPage = () => {
  return (
    <Container>
      <HeroSlider />
      <Categories />
      {/* <FeaturedProducts /> */}
    </Container>
  );
};

export default LandingPage;

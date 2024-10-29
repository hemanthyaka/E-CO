// Slider.js
import React from 'react';
import { Box, Typography } from '@mui/material';

const sliderData = [
  { image: 'https://source.unsplash.com/random/800x400', text: 'New Arrivals' },
  { image: 'https://source.unsplash.com/random/800x400?tech', text: 'Tech Gadgets' },
  { image: 'https://source.unsplash.com/random/800x400?fashion', text: 'Fashion Trends' },
];

const Slider = () => {
  return (
    <Box
      sx={{
        display: 'flex', 
        overflow: 'hidden', 
        width: '100%',
        height: '400px',
        position: 'relative',
        mt: 4,
        borderRadius: 2,
        boxShadow: 3
      }}
    >
      {sliderData.map((slide, index) => (
        <Box
          key={index}
          sx={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minWidth: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography
            variant="h4"
            color="white"
            sx={{
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              padding: '10px 20px',
              borderRadius: 1,
            }}
          >
            {slide.text}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default Slider;

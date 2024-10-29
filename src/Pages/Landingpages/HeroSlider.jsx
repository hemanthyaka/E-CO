// HeroSlider.js
import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, IconButton } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigate } from 'react-router-dom';

const sliderData = [
  {
    image: 'http://www.pngall.com/wp-content/uploads/5/Fashion-Model-Man-PNG-Picture.png',
    title: 'Latest Fashion Trends',
    description: 'Discover the latest in fashion',
    buttonText: 'Shop Now',
    link: '/products'
  },
  {
    image: 'https://www.pngmart.com/files/7/Gadget-PNG-Free-Download.png',
    title: 'Tech Gadgets',
    description: 'Upgrade your tech game',
    buttonText: 'Explore Gadgets',
    link: '/products'
  },
  {
    image: 'http://img04.deviantart.net/b8fd/i/2015/219/f/c/interior_decoration_elements___png_by_lifeblue-d94nzy5.png',
    title: 'Home Essentials',
    description: 'Transform your space',
    buttonText: 'Shop Decor',
    link: '/products'
  },
];

const HeroSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideCount = sliderData.length;
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slideCount);
    }, 5000);
    return () => clearInterval(interval);
  }, [slideCount]);

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % slideCount);
  };

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + slideCount) % slideCount);
  };

  const handleButtonClick = (link) => {
    navigate(link);
  };

  return (
    <Box sx={{ position: 'relative', width: '100%', height: '80vh',marginTop:'100px' }}>
      {sliderData.map((slide, index) => (
        <Box
          key={index}
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: `url(${slide.image})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            opacity: currentIndex === index ? 1 : 0,
            transition: 'opacity 0.8s ease-in-out, transform 1.2s ease-in-out',
            transform: currentIndex === index ? 'scale(1.05)' : 'scale(1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Box
            sx={{
              width: { xs: '90%', sm: '50%', md: '40%' },
              color: 'white',
              textAlign: 'center',
              backdropFilter: 'blur(6px)',
              p: 4,
              borderRadius: 2,
              backgroundColor: 'rgba(0, 0, 0, 0.4)',
              boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.5)',
              animation: currentIndex === index ? 'fadeIn 1.5s ease' : 'none',
            }}
          >
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              {slide.title}
            </Typography>
            <Typography variant="h6" mb={2}>
              {slide.description}
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              onClick={() => handleButtonClick(slide.link)}
              sx={{
                mt: 2,
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                color: 'black',
                '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.9)' }
              }}
            >
              {slide.buttonText}
            </Button>
          </Box>
        </Box>
      ))}

      {/* Navigation Arrows */}
      <IconButton
        onClick={handlePrev}
        sx={{
          position: 'absolute',
          top: '50%',
          left: '20px',
          transform: 'translateY(-50%)',
          color: 'white',
          zIndex: 10,
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
          '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.5)' },
        }}
      >
        <ArrowBackIosIcon />
      </IconButton>

      <IconButton
        onClick={handleNext}
        sx={{
          position: 'absolute',
          top: '50%',
          right: '20px',
          transform: 'translateY(-50%)',
          color: 'white',
          zIndex: 10,
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
          '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.5)' },
        }}
      >
        <ArrowForwardIosIcon />
      </IconButton>

      {/* Indicators */}
      <Box
        sx={{
          position: 'absolute',
          bottom: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: 1,
        }}
      >
        {sliderData.map((_, index) => (
          <Box
            key={index}
            onClick={() => setCurrentIndex(index)}
            sx={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              backgroundColor: currentIndex === index ? 'white' : 'rgba(255, 255, 255, 0.5)',
              cursor: 'pointer',
              transition: 'background-color 0.3s',
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default HeroSlider;

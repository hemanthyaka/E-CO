// Categories.js
import React from 'react';
import { Box, Typography, Grid, Paper, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const categories = [
  { title: 'Men', image: 'http://pngimg.com/uploads/dress_shirt/dress_shirt_PNG8095.png' },
  { title: 'Women', image: 'https://pngimg.com/uploads/dress/dress_PNG99.png' },
  { title: 'Accessories', image: 'https://www.pngall.com/wp-content/uploads/5/Phone-Accessories-PNG-Image.png' },
  { title: 'Home Decor', image: 'https://www.pngmart.com/files/16/Interior-Design-PNG-HD.png' },
];



const Categories = () => {
    const navigate = useNavigate();
    const handleProducts = () => {
      navigate('/products');
    }


   return (
  <Box sx={{ my: 4 }}>
    <Typography variant="h4" align="center" fontWeight="bold" gutterBottom>
      Shop by Categories
    </Typography>
    <Grid container spacing={2}>
      {categories.map((category, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <Paper sx={{ backgroundImage: `url(${category.image})`, backgroundSize: 'cover',backgroundColor:'rgba(0, 0, 0, 0.5)', padding: '20px', height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Button sx={{ width: '70%', height: '50px',backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius:'20px'}} variant="h5" color="#ffffff" fontWeight="bold" onClick={handleProducts} >
              {category.title}
            </Button>
          </Paper>
        </Grid>
      ))}
    </Grid>
  </Box>
)
};

export default Categories;
